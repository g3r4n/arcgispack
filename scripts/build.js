const path = require("path");
const fs = require("fs-extra");
const webpack = require("webpack");
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require("./config.js");
const pathCwd = process.cwd();
const dirs = [
  {
    src: config.buildFolder,
    dist: path.join(pathCwd, "build/esri-bundle")
  },
  {
    src: path.join(config.buildFolder, "arcgis-js-api"),
    dist: path.join(pathCwd, "build/arcgis-js-api")
  }
];
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
    path.join(config.buildFolder, "esriConfig.js")
  );
};

const runWebpack = function() {
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
        path: path.join(pathCwd, "esri-bundle"),
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
      }

      if (stats.hasWarnings()) {
        // console.warn(info.warnings);
      }
      // Done processing
      console.log("Done building the api");
      // copying folders
      copyingBundle();
    }
  );
};

const copyingBundle = function() {
  dirs.forEach(function(dir) {
    fs.removeSync(dir.dist);
    fs.copySync(dir.src, dir.dist);
  });
  // remove bundle folder
  fs.removeSync(config.buildFolder);
};

createBundleFiles();
runWebpack();
