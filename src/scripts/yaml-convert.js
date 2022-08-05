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
  const filepath = path.resolve(__dirname, '../data/yoga-sutra-devanagari.yml');
  fs.watch(filepath, function (event, filename) {
    require('child_process').fork('./src/scripts/yaml-convert.js');
  });
}

function convert() {
  try {
    const filepath = path.resolve(__dirname, '../data/yoga-sutra-devanagari.yml');
    const filepathWrite = path.resolve(__dirname, '../data/yoga-sutra-devanagari.json');
    const json = yaml.load(fs.readFileSync(filepath, 'utf8'));
    fs.writeFileSync(filepathWrite, JSON.stringify(json));
  } catch (e) {
    console.log(e);
  }
}
