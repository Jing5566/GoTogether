// have installed express, ejs, morgan, dotenv,mongoose
// can be installed: joi, nodemon

require("dotenv").config()
const express= require("express")
const app = express()
const port = process.env.PORT||3000
const logger = require("morgan")
app.use(express.static("public"))

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Grab the database information from mongoconnection
// and inserts into file
require('./connections/mongoconnection')

// need to import our models
// this model is used for Profiles
const { GoTogetherModel } = require("./models/GoTogetherModel");
// this model is used for Accounts
const { UserLoginModel } = require("./models/UserLoginModel");


app.use(logger("dev"))

app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.redirect("/landingPage")
})

app.get("/landingPage", (req,res)=>{
    res.render("landingPage.ejs")
})

app.get("/signupPage", (req,res)=>{
    res.render("signupPage.ejs")
})

app.post("/createAccount", (req ,res) => {
    let newUserLoginModel = new UserLoginModel({
        username: req.body.username,
        password: req.body.password
    })
    newUserLoginModel.save();
    res.redirect("/createProfilePage")
});

app.get("/createProfilePage", (req,res)=>{
    res.render("createProfilePage.ejs")
})

app.post("/createProfile", (req, res)=>{
    let newGoTogetherModel = new GoTogetherModel({
        Profile_Image: req.body.Profile_Image,
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Birthday: req.body.Birthday,
        Age: req.body.Age,
        Gender: req.body.Gender,
        Current_City: req.body.Current_City,
        Hometown: req.body.Hometown,
        Profession: req.body.Profession,
        Interests: req.body.Interests,
        Favorite_Movie: req.body.Favorite_Movie,
        Favorite_Artist: req.body.Favorite_Artist,
        Favorite_Food: req.body.Favorite_Food,
        Languages: req.body.Languages,
        More_About_You: req.body.More_About_You
    });
    newGoTogetherModel.save();
    res.redirect("/homePage")
})

app.get("/viewProfilePage", async (req,res)=>{
    const Users = await GoTogetherModel.find({});
    console.log(Users)
    res.render("viewProfilePage.ejs", { Users })
})

app.get("/movieInfoPage", (req,res)=>{
    const api_key=process.env.TMDB_API_KEY
    const baseUrl="https://api.themoviedb.org/3"
    let route=`search/movie?include_adult=false&language=en-US&page=1&api_key=${api_key}&query=${req.query.titlesearch}`
    let endpoint=`${baseUrl}/${route}`
    console.log ("endpoint", endpoint)
    fetch(endpoint)
    .then(response =>{
        return response.json()
    })
    .then(data =>{
        console.log(data)
        res.render("movieInfoPage.ejs", {data:data.results[0]})
    })
    .catch(err=>{
        console.log("Error from movie search fetch", err)
    })
})

app.get("/homePage", (req,res)=>{
    res.render("homePage.ejs")
})

app.get("/editProfilePage", async (req,res)=>{
    const Users = await GoTogetherModel.find({})
    res.render("editProfilePage.ejs", { Users })
})

app.get("/deleteProfilePage", (req,res)=>{
    res.render("deleteProfilePage.ejs")
})

app.get("/deletionConfirmationPage", (req,res)=>{
    res.render("deletionConfirmationPage.ejs")
})

app.listen(port,()=> console.log(`GoTogether is running on port${port}`))
