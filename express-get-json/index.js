const express = require('express');
const app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    names: 'Brenan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const dataArray = [];
for (const key in grades) {
  dataArray.push(grades[key]);
}

app.get('/api/grades', (req, res) => {
  res.json(dataArray);
});

app.listen(3000, () => {
  // enlint-disable-next-line no-console
  console.log('listening on port 3000');
});
