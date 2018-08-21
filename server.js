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

res.write("py\n");

var spawn = require("child_process").spawn;
var process = spawn('python',["./ML/predict.py",1,600,1,40,3,60000,2,1,1,50000]);

process.stdout.on('data', function (data){
  console.log(data.toString());
  res.write(data.toString());
});

//res.send(" END ");

});

var port = 7000;
app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});