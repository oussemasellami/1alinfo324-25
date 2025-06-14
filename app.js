const http = require("http");
const express = require("express");
const mongo = require("mongoose");
const testRouter = require("./routes/test");
const userRouter = require("./routes/userRoutes");
const dbconn = require("./config/dbconnection.json");

mongo
  .connect(dbconn.url)
  .then(console.log("database connected"))
  .catch((err) => console.log(err));
const app = express();
app.use(express.json());
app.use("/test", testRouter);
app.use("/user", userRouter);

const server = http.createServer(app, console.log("server is running"));
server.listen(3000);
