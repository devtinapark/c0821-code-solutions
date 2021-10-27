require('dotenv/config');
const pg = require('pg');
const argon2 = require('argon2'); // eslint-disable-line
const express = require('express');
const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');

const db = new pg.Pool({ // eslint-disable-line
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.post('/api/auth/sign-up', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(400, 'username and password are required fields');
  }
  argon2
    .hash(password)
    .then(hashedPassword => {
      const sql = `
        insert into "users" ("username", "hashedPassword")
        values ($1, $2)
        returning "userId", "username", "createdAt"
      `;
      const params = [username, hashedPassword];
      return db.query(sql, params);
    })
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});

app.post('/api/auth/sign-in', (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new ClientError(401, 'invalid login');
  }
  const sql = `
    select "userId", "username", "hashedPassword"
    from "users"`;
  db.query(sql)
    .then(result => {
      const queryUsers = result.rows;
      let usernameExists = false;
      for (let i = 0; i < queryUsers.length; i++) {
        if (username === queryUsers[i].username) {
          usernameExists = true;
          argon2
            .verify(queryUsers[i].hashedPassword, password)
            .then(isMatching => {
              if (isMatching === false) {
                throw new ClientError(401, 'Password does not match');
              } else {
                const payload = {
                  userId: queryUsers[i].userId,
                  username: queryUsers[i].username
                };
                const token = jwt.sign(payload, process.env.TOKEN_SECRET);
                const result = [payload, token];
                res.status(200).json(result);
              }
            })
            .catch(err => next(err));
        }
      }
      if (usernameExists === false) {
        throw new ClientError(401, 'Username not found');
      }
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
