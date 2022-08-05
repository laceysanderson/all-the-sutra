const yaml = require('js-yaml');
const fs = require('fs');
const path = require("path");

const args = process.argv.slice(2);

switch (args[0]) {
  case 'watch':
    watch();
    break;
  default:
    convert();
}

function watch() {
  console.log("Watching is not supported at this time.");
}

function convert() {
  const filepath = path.resolve(__dirname, '../data/yoga-sutra-devanagari.yml');
  const filepathWrite = path.resolve(__dirname, '../data/yoga-sutra-devanagari.js');
  fs.readFile(filepath, 'utf8', (err, data) => {
    const json = yaml.load(data);
    fs.writeFileSync(
      filepathWrite,
      "const data = " + JSON.stringify(json) + "; export default data;"
    );
  });
}
