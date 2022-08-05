const yaml = require('js-yaml');
const fs = require('fs');
const path = require("path");

/**
 * An array of files to be converted.
 * Note: They should all be in the src/data directory and have a file ending
 *  of .yml. They should also be in valid YAML 1.2 format.
 */
const files = [
  'yoga-sutra-devanagari',
  'translation-SwamiHariharanandaAranya'
];

// Actually call our conversion function.
convert();

/**
 * Function: converts the files defined above from YAML to JSON.
 *
 * The results are saved in the same directory with the '.js' ending
 * and include variable assignment and export as default.
 */
function convert() {
  var filepath, filepathWrite, rawJson;
  files.forEach(filename => {

    // First define the absolute paths using relative paths from the current script.
    filepath = path.resolve(__dirname, '../data/' + filename + '.yml');
    filepathWrite = path.resolve(__dirname, '../data/' + filename + '.js');

    // Next, read the file...
    console.log("Converting " + filepath + " => " + filepathWrite);
    fs.readFile(filepath, 'utf8', (err, data) => {
      // and use js-yaml to convert the file contents stored in data to json.
      json = yaml.load(data);
      // finally, write it to another file with variable assignment + export.
      fs.writeFileSync(
        filepathWrite,
        "const data = " + JSON.stringify(json) + "; export default data;"
      );
    });
  });
}
