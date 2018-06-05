const fs = require("fs-extra");
const dirs = [
  { src: "./esri-bundle", dist: "./build/esri-bundle" },
  { src: "./esri-bundle/arcgis-js-api", dist: "./build/arcgis-js-api" }
];
dirs.forEach(function(dir) {
  fs.removeSync(dir.dist);
  fs.copySync(dir.src, dir.dist);
});
fs.removeSync("./esri-bundle");
