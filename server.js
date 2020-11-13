// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send("Neill's Quote Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});



// thonyś code
// const express = require("express");
// const app = express();
// // Step 1: Reading endpoint query
// app.get("/add", function (request, response) {
//   const value1 = parseInt(request.query.value1);
//   const value2 = parseInt(request.query.value2);
//   const result = parseInt(value1 + value2);
//   response.send(`${value1} + ${value2} = ${result}`);
// });
// app.get("/substract", function (request, response) {
//   const value1 = parseInt(request.query.value1);
//   const value2 = parseInt(request.query.value2);
//   const result = parseInt(value1 - value2);
//   response.send(`${value1} - ${value2} = ${result}`);
// });
// app.get("/multiply", function (request, response) {
//   const value1 = parseInt(request.query.value1);
//   const value2 = parseInt(request.query.value2);
//   const result = parseInt(value1 * value2);
//   response.send(`${value1} * ${value2} = ${result}`);
// });
// app.get("/divide", function (request, response) {
//   const value1 = parseInt(request.query.value1);
//   const value2 = parseInt(request.query.value2);
//   const result = parseFloat(value1 / value2);
//   response.send(`${value1} / ${value2} = ${result}`);
// });
// // Step 2: Reading endpoints parameters
// app.get("/add/:value1/:value2", (request, response) => {
//   const value1 = parseInt(request.params.value1);
//   const value2 = parseInt(request.params.value2);
//   const result = parseInt(value1 + value2);
//   response.send(`${value1} + ${value2} = ${result}`);
// });
// app.get("/substract/:value1/:value2", (request, response) => {
//   const value1 = parseInt(request.params.value1);
//   const value2 = parseInt(request.params.value2);
//   const result = parseInt(value1 - value2);
//   response.send(`${value1} - ${value2} = ${result}`);
// });
// app.get("/multiply/:value1/:value2", (request, response) => {
//   const value1 = parseInt(request.params.value1);
//   const value2 = parseInt(request.params.value2);
//   const result = parseInt(value1 * value2);
//   response.send(`${value1} * ${value2} = ${result}`);
// });
// app.get("/divide/:value1/:value2", (request, response) => {
//   const value1 = parseInt(request.params.value1);
//   const value2 = parseInt(request.params.value2);
//   const result = parseInt(value1 / value2);
//   response.send(`${value1} / ${value2} = ${result}`);
// });
// const port = 3000;
// app.listen(port, function () {
//   console.log(`Server is listening on port ${port}. Ready to accept requests!`);
// });