#!/usr/bin/env node

const path = require("path");
const fs = require("fs-extra");
const webpack = require("webpack");
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const shortUuid = require("short-uuid");
const Listr = require("listr");
let config = require("./configLight.js");
const pathCwd = process.cwd();
const params = process.argv;
let version = require("../package.json").version;
let versionArray = version.split(".");
versionArray[2] = parseInt( versionArray[2]) +1;
version = versionArray.join(".");

const loadLocalConfig = function() {
  config = eval(
    fs.readFileSync(path.resolve(pathCwd, "arcgis.config.js"), "utf8")
  );
};

const loadConfigFromArgv = function() {
  config = require(process.argv[2]);
};

const updateConfig = config => {
  // set default value
  const uuid = shortUuid().new();
  config.buildFolder = path.resolve(pathCwd, uuid);
  config.webpackEntry = path.resolve(config.buildFolder, "esriBundle.js");
  config.root = config.root ? config.root : "/esri-bundle";
  config.dojoModules.unshift("./esriConfig");
};
const createBundleFiles = function() {
  // clear old files
  fs.removeSync(config.webpackEntry);
  fs.removeSync(config.libEntry);
  // create variables
  const newLine = `
`;
  let webpackEntryTextStart = "";
  let webpackEntryTextEnd = "";
  let libEntryConst = "";
  let libEntryExport = "";
  // loop on each dojo modules
  config.dojoModules.forEach(function(dojoModule, index) {
    const dojoModuleName = dojoModule.substr(dojoModule.lastIndexOf("/") + 1);
    webpackEntryTextStart +=
      `import ${dojoModuleName} from "${dojoModule}";` + newLine;
    webpackEntryTextEnd +=
      `window.esriBundle.${dojoModuleName} = ${dojoModuleName};` + newLine;
    libEntryConst +=
      `const ${dojoModuleName} = window.esriBundle.${dojoModuleName};` +
      newLine;
    libEntryExport += `  ${dojoModuleName}`;
    if (index !== config.dojoModules.length - 1) {
      libEntryExport += "," + newLine;
    }
  });
  // create final string
  const webpackEntryText = `${webpackEntryTextStart}
window.esriBundle = {};
${webpackEntryTextEnd}`;

  const libEntryText = `${libEntryConst}
export {
${libEntryExport}
}`;
  // create output files
  fs.createFileSync(config.webpackEntry);
  fs.createFileSync(config.libEntry);
  // write in output files
  fs.writeFileSync(config.webpackEntry, webpackEntryText);
  fs.writeFileSync(config.libEntry, libEntryText);
  // copy esri config
  fs.copyFileSync(
    path.resolve(__dirname, "esriConfig.js"),
    path.resolve(config.buildFolder, "esriConfig.js")
  );
};

const runWebpack = function() {
  return new Promise(function(resolve, reject) {
    // run webpack build
    webpack(
      {
        mode: "production",
        entry: config.webpackEntry,
        module: {
          rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ["babel-loader"]
            },
            {
              test: /\.css$/,
              use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
          ]
        },
        resolve: {
          extensions: ["*", ".js", ".jsx"]
        },
        output: {
          path: config.buildFolder,
          publicPath: config.isCdn
            ? "https://cdn.jsdelivr.net/gh/g3r4n/arcgispack@" +
              version +
              config.root +
              "/"
            : config.root + "/",
          filename: "bundle.js"
        },
        plugins: [
          new ArcGISPlugin({
            root: config.isCdn
              ? "https://cdn.jsdelivr.net/gh/g3r4n/arcgispack@" +
                version +
                config.root
              : config.root,
            options: {
              noConsole: true
            }
          }),
          new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          }),
          new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1,
          })
        ],
        externals: [
          (context, request, callback) => {
            if (/pe-wasm$/.test(request)) {
              return callback(null, "amd " + request);
            }
            callback();
          }
        ],
        node: {
          process: false,
          global: false
        }
      },
      (err, stats) => {
        if (err) {
          console.error(err.stack || err);
          if (err.details) {
            console.error(err.details);
            reject(err.details);
          }
          return;
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
          console.error(info.errors);
          reject(info.errors);
        }

        if (stats.hasWarnings()) {
          // console.warn(info.warnings);
        }
        // Done processing
        resolve("Done building the api");
      }
    );
  });
};

const copyingBundle = function() {
  fs.removeSync(path.resolve(config.outputPath, "esri-bundle"));
  fs.copySync(
    config.buildFolder,
    path.resolve(config.outputPath, "esri-bundle")
  );
  // remove bundle folder
  fs.removeSync(config.buildFolder);
};

const copyExistingBabel = function() {
  fs.copyFileSync(
    path.resolve(pathCwd, ".babelrc"),
    path.resolve(pathCwd, ".babelrc.orig")
  );
};

const createBabelConfig = function() {
  fs.writeFileSync(
    path.resolve(pathCwd, ".babelrc"),
    `{
    "presets": [["env", { "modules": "amd" }]]
  }`
  );
};

const removeBabelConfig = function() {
  fs.removeSync(path.resolve(pathCwd, ".babelrc"));
};

const removeSavedBabelConfig = function() {
  fs.removeSync(path.resolve(pathCwd, ".babelrc.orig"));
};

const restoreBabelConfig = function() {
  fs.writeFileSync(
    path.resolve(pathCwd, ".babelrc"),
    fs.readFileSync(path.resolve(pathCwd, ".babelrc.orig"))
  );
};

// creating the list for console
const tasks = new Listr([
  {
    title: "load local config",
    skip: () => {
      if (
        params.length > 2 &&
        !fs.existsSync(path.resolve(pathCwd, "arcgis.config.js"))
      ) {
        return "no local config";
      }
    },
    task: () => loadLocalConfig()
  },
  {
    title: "load config from command",
    skip: () => {
      if (params.length === 2) {
        return "no local config in as argument";
      }
    },
    task: () => loadConfigFromArgv()
  },
  {
    title: "loading config",
    task: () => updateConfig(config)
  },
  {
    title: "Copy of the existing babelrc",
    skip: () => {
      if (!fs.existsSync(path.resolve(pathCwd, ".babelrc"))) {
        return "babelrc do not exist";
      }
    },
    task: () => copyExistingBabel()
  },
  {
    title: "Create babelrc config",
    task: () => createBabelConfig()
  },
  {
    title: "create build file",
    task: () => createBundleFiles()
  },
  {
    title: "building the API",
    task: () => runWebpack()
  },
  {
    title: "Copying bundles to the output path",
    task: () => copyingBundle()
  },
  {
    title: "Remove bundle babelrc copy",
    task: () => removeBabelConfig()
  },
  {
    title: "Restore babelrc",
    skip: () => {
      if (!fs.existsSync(path.resolve(pathCwd, ".babelrc.orig"))) {
        return "no babelrc to restore";
      }
    },
    task: () => restoreBabelConfig()
  },
  {
    title: "Delete copy of babelrc",
    skip: () => {
      if (!fs.existsSync(path.resolve(pathCwd, ".babelrc.orig"))) {
        return "no babelrc copy to delete";
      }
    },
    task: () => removeSavedBabelConfig()
  }
]);

tasks.run().catch(err => {
  console.error(err);
});
