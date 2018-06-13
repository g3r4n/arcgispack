const path = require("path");
const libFolder = path.join(process.cwd(), "src");

module.exports = {
  outputPath: path.join(process.cwd(), "public"),
  libEntry: path.join(libFolder, "arcgis.js"),
  dojoModules: ["esri/Map", "esri/views/MapView", "esri/views/SceneView"]
};
