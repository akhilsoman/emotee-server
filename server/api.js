// api logic
const requesthttp = require('request');
const config = require('./config');
const _ = require('lodash');
const options = {
  'Content-Type': 'application/json',
  'method': 'GET'
};


const errorHandler = function(res,response){
    response.status(res.statusCode);
    response.json(res.statusMessage || 'Something went wrong, Please try again after some time');
}

module.exports = {

}
