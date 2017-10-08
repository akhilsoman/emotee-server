process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const express = require('express');
const path    = require('path');
const compression = require('compression')
const api    = require('./api');
const bodyParser = require('body-parser');
const multer  = require('multer');

//Multer extension
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname)) //Appending extension
  }
})

const uplaod = multer({ /*dest: 'uploads/'*/ storage: storage});


const port = (process.argv.slice(2).length > 0) ? parseInt(process.argv.slice(2)) : 5000 ;
// setting up express server

const app = express();

//enabling compression
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Api routing
app.post('/api/uploadImage', uplaod.single('emoteeinp'), api.getEmotionIndex);

//starting server
const server = app.listen(port, function () {
  console.log ('Server started on port: ' + server.address().port);
});//server start up
