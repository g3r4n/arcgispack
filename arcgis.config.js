const path = require("path");

module.exports = {
  outputPath: path.join(process.cwd(), "public"),
  dojoModules: ["esri/Map", "esri/views/SceneView", "esri/layers/SceneLayer"]
};
