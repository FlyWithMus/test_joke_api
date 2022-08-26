const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const getData = require('./controllers/getData');
const errorHandler = require('./helpers/errorHandler');
const notFound = require('./helpers/notFound');

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

//endpoint
app.get('/data', getData);

//middleware not found
app.use(notFound);

//error middleware
app.use(errorHandler);

app.listen(
  app.listen(SERVER_PORT, () => {
    console.log(`Server listening at localhost:${SERVER_PORT}`);
  })
);
