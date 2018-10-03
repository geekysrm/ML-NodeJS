const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello World");
});
/*
let py = new Promise( (resolve,reject) => {

  const spawn = require("child_process").spawn;
  const process = spawn('python',["./ML/predict.py"]);

  process.stdout.on('data', function (data){
    console.log(data.toString());
    resolve(data);
  });


  process.stderr.on('data', function (data){
    console.log(data.toString());
    reject(data);
  });


});
*/

app.get("/py", (req, res) => {
  let out = "";

  const spawn = require("child_process").spawn;
  const process = spawn("python", [
    "./ML/ml.py",
    "France",
    619,
    1,
    42,
    2,
    0,
    1,
    1,
    1,
    101348.88
  ]);

  process.stdout.on("data", function(data) {
    console.log(data.toString());
    out = out + data.toString();
  });

  process.stdout.on("end", function() {
    if (out.substring(2, 3) === "F") {
      res.send("False");
    } else {
      res.send("True");
    }
  });
});

const port = 7000;
app.listen(port, function() {
  console.log(`app listening on port ${port}!`);
});
