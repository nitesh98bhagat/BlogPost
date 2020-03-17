//imports 
const express = require('express');
const bodyParser = require('body-parser');


const tweets = [];

const contact = {
    email: "nitshbhgt1998@gmail.com",
    phoneNo: "9007374954",
    facebook: "facebook/niteshBhagat",
    twitter: "twitter/myself_nitesh",

}


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


//post method
app.post("/", function (req, res) {
    let headline = req.body.headline;
    let content = req.body.content;

    tweetObj = {
        head: headline,
        body: content
    };

    tweets.push(tweetObj);
    res.redirect("/");

});

//ADDPOST ROUTE
app.get("/addPosts", function (req, res) {

    res.render("addPosts");
});

//ABOUT US
app.get("/aboutUs", function (req, res) {
    res.render("aboutUs");
});


//ABOUT US
app.get("/contactUs", function (req, res) {

    res.render("contactUs", { contactObj: contact });
});