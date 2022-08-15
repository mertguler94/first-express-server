const express = require("express");
const app = express();
const port = 3000;


app.get("/", function (req,res) { 
    res.send("Hello world!, this is my first server.");
 });

 
 app.get("/contact", function (req,res) { 
     res.send("This is my contact page.");
  });


app.get("/about", function (req,res) { 
    res.send("I am Mert Guler, a Computer Programming student.");
 });


app.listen(port, function () { 
    console.log("Server started to run on port: " + port);
 });