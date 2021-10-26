const express = require('express');
const path = require('path');
const app = express();

const pubDir = path.join(__dirname, 'public');
console.log(pubDir);
const resStatic = express.static(pubDir);
console.log(resStatic);

app.use(resStatic);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
