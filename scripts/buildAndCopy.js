const fs = require("fs-extra");
const srcDir = "./src/lib/esri-bundle";
const distDir = "./build/esri-bundle";
fs.removeSync(distDir);
fs.copySync(srcDir, distDir);
