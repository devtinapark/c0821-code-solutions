const fs = require('fs');
let string = '';
function createString() {
  for (var i = 2; i < process.argv.length; i++) {
    string += process.argv[i];
  }
  return string;
}
createString();
const data = string;

fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});
