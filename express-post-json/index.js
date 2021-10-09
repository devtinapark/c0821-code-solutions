const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const arrayGrades = [];
  for (const key in grades) {
    arrayGrades.push(grades[key]);
  }
  res.json(arrayGrades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const data = req.body;
  const id = nextId;
  data.id = id;
  grades[id] = data;
  nextId++;
  res.status(201).json(data);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
