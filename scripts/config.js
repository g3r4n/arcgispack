const path = require("path");
const libFolder = path.join(process.cwd(), "src", "lib");

module.exports = {
  outputPath: path.join(process.cwd(), "public"),
  libEntry: path.join(libFolder, "index.js"),
  dojoModules: [
    {
      name: "Map",
      dojoPath: "esri/Map"
    },
    {
      name: "MapView",
      dojoPath: "esri/views/MapView"
    },
    {
      name: "SceneView",
      dojoPath: "esri/views/SceneView"
    }
  ]
};
