const express = require('express');
const app = express();
app.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
  console.log(req.method);
  res.send('<p>tina</p>');
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
