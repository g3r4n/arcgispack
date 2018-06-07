const path = require("path");
const buildFolder = path.join(process.cwd(), "esri-bundle");
const libFolder = path.join(process.cwd(), "src", "lib");

module.exports = {
  buildFolder: buildFolder,
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
