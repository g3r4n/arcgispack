const webpack = require("webpack");
const ArcGISPlugin = require("@arcgis/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./esri-bundle/esriBundle.js"],
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
    path: __dirname + "/esri-bundle",
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
};
