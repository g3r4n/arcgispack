const path = require("path");
const fs = require("fs-extra");
const webpack = require("webpack");
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pathCwd = process.cwd();
const dirs = [
  {
    src: path.join(pathCwd, "esri-bundle"),
    dist: path.join(pathCwd, "build/esri-bundle")
  },
  {
    src: path.join(pathCwd, "esri-bundle/arcgis-js-api"),
    dist: path.join(pathCwd, "build/arcgis-js-api")
  }
];
fs.ensureDirSync(path.join(pathCwd, "esri-bundle"));
// run webpack build
webpack(
  {
    mode: "production",
    entry: [path.join(pathCwd, "esri-bundle/esriBundle.js")],
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
        },
        {
          test: /\.(jpe?g|png|gif|webp)$/,
          loader: "url-loader",
          options: {
            // Inline files smaller than 10 kB (10240 bytes)
            limit: 10 * 1024
          }
        },
        {
          test: /\.(wsv|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "fonts/[name].[ext]"
              }
            }
          ]
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
      new ArcGISPlugin({
        // disable provided asset loaders
        useDefaultAssetLoaders: false
      }),
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
    dirs.forEach(function(dir) {
      fs.removeSync(dir.dist);
      fs.copySync(dir.src, dir.dist);
    });
    // remove bundle folder
    fs.removeSync("./esri-bundle");
  }
);
