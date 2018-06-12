const path = require("path");
const libFolder = path.join(process.cwd(), "arcgis");

module.exports = {
  outputPath: path.join(process.cwd(), "public"),
  libEntry: path.join(libFolder, "index.js"),
  dojoModules: ["esri/Map", "esri/views/MapView", "esri/views/SceneView"]
};
