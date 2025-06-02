const express = require('express');
const cors = require('cors');
const createError = require('http-errors');
const errorMiddleware = require('./middlewares/error.middleware');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', routes);

app.use((req, res, next) => {
  next(createError.NotFound('Endpoint not found'));
});

app.use(errorMiddleware);

module.exports = app;
