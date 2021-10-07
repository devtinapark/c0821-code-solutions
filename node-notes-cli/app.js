const fs = require('fs');

if (process.argv[2] === 'read') {
  read();
} else if (process.argv[2] === 'create') {
  create();
} else if (process.argv[2] === 'delete') {
  del();
} else if (process.argv[2] === 'update') {
  update();
}

function create() {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataParsed = JSON.parse(data);
    dataParsed.notes[dataParsed.nextID.toString()] = process.argv[3];
    dataParsed.nextID++;
    const dataJSON = JSON.stringify(dataParsed, null, 2);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) throw err;
    });
  });
}

function read() {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataParsed = JSON.parse(data);
    const dataNotesJSON = JSON.stringify(dataParsed.notes, null, 2);
    console.log(dataNotesJSON);
  });
}

function del() {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataParsed = JSON.parse(data);
    delete dataParsed.notes[process.argv[3]];
    const dataJSON = JSON.stringify(dataParsed, null, 2);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) throw err;
    });
  });
}

function update() {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataParsed = JSON.parse(data);
    dataParsed.notes[process.argv[3]] = process.argv[4];
    const dataJSON = JSON.stringify(dataParsed);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) throw err;
    });
  });
}
