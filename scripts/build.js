const path = require("path");
const fs = require("fs-extra");
const webpack = require("webpack");
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const shortUuid = require("short-uuid");
const Listr = require("listr");
let config = require("./config.js");
const pathCwd = process.cwd();

const updateConfig = config => {
  // set default value
  const uuid = shortUuid().new();
  config.buildFolder = path.resolve(pathCwd, uuid);
  config.webpackEntry = path.resolve(config.buildFolder, "esriBundle.js");
  config.dojoModules.unshift({
    name: "EsriConfig",
    dojoPath: "./esriConfig"
  });
  config.buildDirs = [
    {
      src: config.buildFolder,
      dist: path.resolve(config.outputPath, "esri-bundle")
    },
    {
      src: path.resolve(config.buildFolder, "arcgis-js-api"),
      dist: path.resolve(config.outputPath, "arcgis-js-api")
    }
  ];
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
    webpackEntryTextStart +=
      `import ${dojoModule.name} from "${dojoModule.dojoPath}";` + newLine;
    webpackEntryTextEnd +=
      `window.esriBundle.${dojoModule.name} = ${dojoModule.name};` + newLine;
    libEntryConst +=
      `const ${dojoModule.name} = window.esriBundle.${dojoModule.name};` +
      newLine;
    libEntryExport += `  ${dojoModule.name}`;
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
    "./scripts/esriConfig.js",
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
          publicPath: "/esri-bundle/",
          filename: "bundle.js"
        },
        plugins: [
          new ArcGISPlugin(),
          new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
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
  config.buildDirs.forEach(function(dir) {
    fs.removeSync(dir.dist);
    fs.copySync(dir.src, dir.dist);
  });
  // remove bundle folder
  fs.removeSync(config.buildFolder);
};

// creating the list for console
const tasks = new Listr([
  {
    title: "loading config",
    task: () => updateConfig(config)
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
  }
]);

tasks.run().catch(err => {
  console.error(err);
});
