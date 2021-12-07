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
    const idReq = Number(req.params.id);
    if (Number.isInteger(idReq) === false || idReq < 0) {
      const improperId = {
        error: 'id must be a positive integer'
      };
      res.json(improperId);
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
    const dataParsed = JSON.parse(data);
    const idNote = dataParsed.nextId++;
    const dataNote = req.body;
    if (!dataNote.content) {
      const nc = {
        error: 'content is a required field'
      };
      res.json(nc);
      res.sendStatus(400);
    } else if (err) {
      const unexpected = {
        error: 'An unexpected error occured'
      };
      res.json(unexpected);
      res.sendStatus(500);
      throw err;
    } else {
      dataNote.id = idNote;
      dataParsed.notes[idNote.toString()] = dataNote;
      const dataJSON = JSON.stringify(dataParsed, null, 2);
      fs.writeFile('data.json', dataJSON, err => {
        if (err) throw err;
      });
      res.sendStatus(201).json(dataNote);
    }
  });
});
app.delete('/api/grades/:id', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    const dataParsed = JSON.parse(data);
    const idReq = Number(req.params.id);
    if (Number.isInteger(idReq) === false || idReq < 0) {
      const improperId = {
        error: 'id must be a positive integer'
      };
      res.json(improperId);
      res.sendStatus(400);
    } else if (!dataParsed.notes[idReq]) {
      const nf = {
        error: `cannot find note with id ${idReq}`
      };
      res.json(nf);
      res.sendStatus(404);
    } else if (err) {
      const unexpected = {
        error: 'An unexpected error occured'
      };
      res.json(unexpected);
      res.sendStatus(500);
      throw err;
    } else {
      delete dataParsed.notes[idReq];
      const dataJSON = JSON.stringify(dataParsed, null, 2);
      fs.writeFile('data.json', dataJSON, err => {
        if (err) throw err;
        res.sendStatus(204);
      });
    }
  });
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
