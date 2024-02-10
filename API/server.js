const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const server = express();
server.use(cors());
server.use(express.json());
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
const Global = require("./database/models/global-model");
server.use("/users", userRouter);

server.get("/", (req, res) => {
  Global.getAll("users").then((data) => {
    res.status(200).json({ message: "Up and running", data: data });
  });
});
server.post("/", (req, res) => {
  Global.add({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = server;
