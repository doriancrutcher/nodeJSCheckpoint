const csv = require('csv-parser');
const fs = require('fs');

const results = [];


// Streams, a sequence of data that is being moved from one point to another over time
fs.createReadStream('./content/2019-12-01.csv')
.pipe(csv())
.on('data', (data) => results.push(data))
.on('end', () => {
  console.log(results);
});