//imports 
const express = require('express');
const bodyParser = require('body-parser');


const tweets = ["Hello World, thats my first blog post in my own god damm APP", "oh no!!", "hello"];


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
    res.render("mainBody", { homeData: tweets });
});


//ADD POST ROUTE
app.get("/addPosts", function (req, res) {
    res.render("addPosts");
});

//ABOUT US
app.get("/aboutUs", function(req, res){
    res.render("aboutUs");
});


//ABOUT US
app.get("/contactUs", function(req, res){
    res.render("contactUs");
});