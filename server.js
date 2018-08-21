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

  
  process.stderr.on('data', function (data){
    console.log(data.toString());
    reject(data);
  });
  

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
let out = '';

var spawn = require("child_process").spawn;
var process = spawn('python',["./ML/predict.py"]);

process.stdout.on('data', function (data){
  console.log(data.toString());
  out = out + data.toString();
});

process.stdout.on('end', function(){
  res.send(out);
});


});

var port = 7000;
app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});