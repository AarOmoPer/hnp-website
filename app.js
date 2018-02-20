const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser')
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(bodyParser.urlencoded())
app.use('/', router)

module.exports = app;