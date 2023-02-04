const express = require("express");
const server = express();
const PORT = 3333;

let list = ["apples"];

let counter = 0;

server.use(express.json());

server.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// server.get("/dirname", function (req, res) {
//   res.send(__dirname);
// });

server.get("/req", function (req, res) {
  res.json(Object.keys(req));
});

server.get("/res", function (req, res) {
  res.json(Object.keys(res));
});

server.get("/list", function (req, res) {
  res.json(list);
});

server.get("/addToList/:item", function (req, res) {
  const item = req.params.item;
  console.log(item);
  list.push(item);
  res.json(list);
});

server.get("/removeFromList/:itemToRemove", function (req, res) {
  const itemToRemove = req.params.itemToRemove;
  list = list.filter(function (item) {
    return item !== itemToRemove;
  });
  res.json(list);
});

server.get("/query", function (req, res) {
  const query = req.query;
  res.json(query);
});

server.get("/params/:a/:b/:c", function (req, res) {
  const params = req.params;
  console.log(params);
  res.json(params);
});

server.post("/post", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// server.get("/counter", function (req, res) {
//   let value = String(counter);
//   res.send(value);
// });

// server.get("/increment", function (req, res) {
//   let value = String(++counter);
//   res.send(value);
// });

// server.get("/decrement", function (req, res) {
//   let value = String(--counter);
//   res.send(value);
// });

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

server.get("*", function (req, res) {
  res.sendFile(__dirname + "/404.html");
});

server.listen(PORT, function () {
  console.log(`Now listening on Port: ${PORT}`);
});

function rand(lo, hi) {
  const diff = hi - lo;
  return Math.floor(Math.random() * diff + lo);
}
