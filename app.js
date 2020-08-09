import express from "express"; //var express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

var app = express();

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads")); //look for a file not any kind of controller, view
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

//sombody calls user,I want to use whole Router
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
