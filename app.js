//imports 
const express = require('express');
const bodyParser = require('body-parser');

//instance of express server
const app = express();

//to use static assets such as css, js, & img
app.use(express.static("public"));
//to pass data between server and webpage
app.use(bodyParser.urlencoded({ extended: true }));
//setting the view engine
app.set("view engine", "ejs");

//SERVER STARTUP CODE
app.listen(3000, function () {
    console.log("SERVER STARTED ON PORT localhost:3000");
});



//Home Route
app.get("/", function (req, res) {
    res.render("mainBody", { name: "nitesh" });
});