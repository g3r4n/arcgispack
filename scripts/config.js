const path = require("path");
const libFolder = path.join(process.cwd(), "src", "lib");

module.exports = {
  libEntry: path.join(libFolder, "index.js"),
  dojoModules: [
    {
      name: "EsriConfig",
      dojoPath: "./esriConfig"
    },
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
