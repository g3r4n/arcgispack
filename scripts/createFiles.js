const fs = require("fs-extra");
const config = require("./config.js");
// clear old files
fs.removeSync(config.webpackEntry);
fs.removeSync(config.libEntry);
// create variables
const newLine = `
`;
let webpackEntryTextStart = "";
let webpackEntryTextEnd = "";
let libEntryConst = "";
let libEntryExport = "";
// loop on each dojo modules
config.dojoModules.forEach(function(dojoModule, index) {
  webpackEntryTextStart +=
    `import ${dojoModule.name} from "${dojoModule.dojoPath}";` + newLine;
  webpackEntryTextEnd +=
    `window.esriBundle.${dojoModule.name} = ${dojoModule.name};` + newLine;
  libEntryConst +=
    `const ${dojoModule.name} = window.esriBundle.${dojoModule.name};` +
    newLine;
  libEntryExport += `  ${dojoModule.name}`;
  if (index !== config.dojoModules.length - 1) {
    libEntryExport += "," + newLine;
  }
});
// create final string
const webpackEntryText = `${webpackEntryTextStart}
window.esriBundle = {};
${webpackEntryTextEnd}`;

const libEntryText = `${libEntryConst}
export {
${libEntryExport}
}`;
// create output files
fs.createFileSync(config.webpackEntry);
fs.createFileSync(config.libEntry);
// write in output files
fs.writeFileSync(config.webpackEntry, webpackEntryText);
fs.writeFileSync(config.libEntry, libEntryText);
// copy esri config
fs.copyFileSync("./scripts/esriConfig.js", "./esri-bundle/esriConfig.js");
