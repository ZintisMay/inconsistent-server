const express = require("express");
const server = express();

server.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

server.get("/50-50", function (req, res) {
  const flip = rand(0, 2);
  if (flip === 1) {
    res.status(200).send({
      message: "Success!",
    });
  } else {
    res.status(400).send({
      message: "Error!",
    });
  }
});
server.get("/100", function (req, res) {
  res.status(200).send({
    message: "Success!",
  });
});

server.listen("3333", function (err) {
  console.log(err);
});

function rand(lo, hi) {
  const diff = hi - lo;
  return Math.floor(Math.random() * diff + lo);
}
