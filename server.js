// yarn dev

const express = require("express");
const app = express();

const port = 8000;
app.listen(port, function () {
  console.log(`port ${port}`);
});

app.get("/", function (req, res) {
  const scriptPath = "./script.py";
  const spawn = require("child_process").spawn;
  const process = spawn("python", [scriptPath]);
  process.stdout.on("data", function (data) {
    res.send({ result: data.toString() });
  });
});