const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/grades', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataParsed = JSON.parse(data);
    const dataNotesArray = [];
    for (const key in dataParsed.notes) {
      dataNotesArray.push(dataParsed.notes[key]);
    }
    res.json(dataNotesArray);
  });
});

app.get('/api/grades/:id', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataParsed = JSON.parse(data);
    const idReq = req.params.id;
    if (Number.isInteger(Number(idReq)) === false || idReq < 0) {
      const improperID = {
        error: 'id must be a positive integer'
      };
      res.json(improperID);
      res.sendStatus(400);
    } else if (!dataParsed.notes[idReq]) {
      const nf = {
        error: `cannot find note with id ${idReq}`
      };
      res.json(nf);
      res.sendStatus(404);
    } else {
      res.json(dataParsed.notes[idReq]);
    }
  });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    const dataParsed = JSON.parse(data);
    const idNote = dataParsed.nextId++;
    const dataNote = req.body;
    dataNote.id = idNote;
    dataParsed.notes[idNote.toString()] = dataNote;
    const dataJSON = JSON.stringify(dataParsed, null, 2);
    fs.writeFile('data.json', dataJSON, err => {
      if (err) throw err;
    });
    res.status(201).json(dataNote);
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
