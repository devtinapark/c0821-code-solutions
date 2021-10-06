const fs = require('fs');

const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, text) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(text);
});
