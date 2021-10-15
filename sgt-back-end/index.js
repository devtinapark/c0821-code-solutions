const express = require('express');
const app = express();

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"
  order by "gradeId"
  `;
  db.query(sql)
    .then(result => {
      const resultData = result.rows;
      res.json(resultData);
      res.status(200);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occcured'
      });
    });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score);
  const text = `insert into "grades" ("name", "course", "score")
                values ($1, $2, $3)
                returning *`;
  const values = [req.body.name, req.body.course, score];
  if (!req.body.name || !req.body.course || !req.body.score || score < 0 || !Number.isInteger(score)) {
    res.status(400).json({
      error: 'invalid input'
    });
  } else {
    db.query(text, values)
      .then(result => {
        const resultData = result.rows[0];
        res.json(resultData);
        res.status(200);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occcured'
        });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const score = Number(req.body.score);
  const text = `update "grades"
                    set "name"    = $1,
                        "course"  = $2,
                        "score"   = $3
                  where "gradeId" = $4
                        returning *`;
  const values = [req.body.name, req.body.course, score, gradeId];
  if (!req.body.name || !req.body.course || !req.body.score || !gradeId < 0 || !Number.isInteger(gradeId) || score < 0 || !Number.isInteger(score)) {
    res.status(400).json({
      error: 'invalid input'
    });
  } else {
    db.query(text, values)
      .then(result => {
        const resultData = result.rows[0];
        if (!resultData) {
          res.status(404).json({
            error: 'Requested gradeId not found'
          });
        } else {
          res.json(resultData);
          res.status(200);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occcured'
        });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  const text = `delete from "grades"
                where "gradeId" = $1
                returning *`;
  const values = [gradeId];
  if (!Number.isInteger(gradeId) || gradeId < 0) {
    res.status(400).json({
      error: 'invalid gradeId'
    });
  } else {
    db.query(text, values)
      .then(result => {
        const resultData = result.rows[0];
        if (!resultData) {
          res.status(404).json({
            error: 'Requested gradeId not found'
          });
        } else {
          res.json(resultData);
          res.status(200);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occured'
        });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening at port 3000');
});
