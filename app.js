const http = require('http');
const express = require("express");
const cnew = require("./cnews");

var app = express();
http.createServer(app).listen(8080);

app.use(express.static("public"));


app.get('/cnew',cnew.homePage);
