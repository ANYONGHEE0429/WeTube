import express from "express"; //var express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

var app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on: http://localhost:${PORT}`);
}

const handleHome = (req, res) => res.send("hello from home");

const handleProfile = (req, res) => res.send("This is my profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

//if use res.send can kill the connection
const middleware = (req, res, next) => {
  res.send("not hanppening");
};

app.get("/", middleware, handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handleListening);
