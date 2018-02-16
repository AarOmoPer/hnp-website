const express = require('express');
const router = require('./routes')

const app = express();

app.set('view engine', 'ejs')
express.static(__dirname + '/public')
app.use('/', router)

module.exports = app;