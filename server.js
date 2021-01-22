// server.js version 3.0 January 2020
// enables us to read the settings from the .env file nad use them in our code
require('dotenv').config();

const express = require('express');

const app = express();

// const hostname = process.env.HOST;
// this is etelling the port to use either the details hidden in the .env file or port 8080
const PORT = process.env.PORT || 8080;

// allour fucntions are stored here and we're passing N INSTANCE OF APP TO IT
require('./controller/api-routes')(app);

const server = app.listen(PORT, () => {
  // you will need to fix this line and the line below once you run the eslint test
  // eslint-disable-next-line no-console
  console.log('app running on port ', PORT);
});
// the comment below is recognised by eslint -
// you would want to prvent from mdeplyng code that has console.log
// statmentsbecause you don't want he user to see the console logs.
// it gets written as a comment exatly as it is below. you can
//  also have it ignore entire code blocks in a similar manner
// eslint-disable-next-line no-console
console.log('server.js: file has finished reading');

module.exports = server;
