var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/',(req,res) => {
    res.send("Hello World");
});

let py = new Promise( (resolve,reject) => {

  var spawn = require("child_process").spawn;
  var process = spawn('python',["./ML/predict.py"]);

  process.stdout.on('data', function (data){
    console.log(data.toString());
    resolve(data);
  });

  /*
  process.stderr.on('data', function (data){
    console.log(data.toString());
    reject(data);
  });
  */

});

app.get('/py',(req,res) => {
/*
  res.write("py\n");

  py
  .then( data => {
    console.log(data.toString());
    res.end(data.toString());
  })
  .catch( err => {
    console.log(err.toString());
    res.end(err.toString());
  });
*/

let output = '';

var spawn = require("child_process").spawn;
var process = spawn('python',["./ML/predict.py"]);

process.stdout.on('data', function (data){
  console.log(data.toString());

  output = output + data.toString();
});

res.send(output);

});

var port = 7000;
app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});