const fs = require('fs');

function read() {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

if (process.argv[2] === 'read') {
  read();
}
