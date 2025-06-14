const http = require("http");
const express = require("express");

const testRouter = require("./routes/test");

const app = express();

app.use("/test", testRouter);


const server = http.createServer(app, console.log("server is running"));
server.listen(3000);
