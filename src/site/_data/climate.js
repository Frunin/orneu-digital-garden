const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');

function loadCSV(filename) {
  const file = fs.readFileSync(path.resolve(__dirname, filename), 'utf8');
  const records = parse(file, { columns: true });
  const result = {};
  for (const row of records) {
    result[row.Name] = parseFloat(row.Value);
  }
  return result;
}

module.exports = {
  precipitation: loadCSV('precipitation.csv'),
  temperature: loadCSV('temperature.csv')
};
