const express = require('express');
const path    = require('path');
const compression = require('compression')
const api    = require('./api');
const bodyParser = require('body-parser');


const port = (process.argv.slice(2).length > 0) ? parseInt(process.argv.slice(2)) : 5000 ;
// setting up express server

const app = express();

//enabling compression
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Api routing


//starting server
const server = app.listen(port, function () {
  console.log ('Server started on port: ' + server.address().port);
});//server start up
