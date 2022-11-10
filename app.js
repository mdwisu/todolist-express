const express = require('express');
const session = require('express-session');
const allRouter = require('./routes');

require('dotenv').config();
const app = express();

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: 'auto',
    },
  })
);
app.use(express.json());
app.use(allRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running in http://localhost:${process.env.PORT}`);
});
