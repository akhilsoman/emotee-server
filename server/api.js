// api logic
"use strict"
const makerequest = require('request');
const config = require('./config');
const _ = require('lodash');
const fs = require('fs');
const path = require('path')

const options = {
  'method': 'POST',
  'headers': {
    'Content-Type': 'application/octet-stream',
    'Ocp-Apim-Subscription-Key' : config['key1']
  },
  'json': false,
};
const getEmotionIndex = function(request,response){
  let option = _.merge(options,{
    'uri' : config["api-url"]+"/recognize",
    'body': fs.readFileSync(`uploads/${request.file.filename}`)
  });
  let req = makerequest(option, function(err, res, body) {
    if(res.statusCode !== 200) {
      errorHandler(res,response);
    }else{
      body = JSON.parse(body)
      response.json(body)
    }
  });
}
const errorHandler = function(res,response){
    response.status(res.statusCode);
    response.json(res.statusMessage || 'Something went wrong, Please try again after some time');
}

module.exports = {
  getEmotionIndex: getEmotionIndex
}
