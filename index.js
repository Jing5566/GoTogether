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

// This is used to give the application access to what is in the "public" folder
app.use(express.static("public"))

// This is the route that will redirect you to the "landingPage" route, should you only enter "localhost:3000" in the url
app.get("/", (req,res)=>{
    res.redirect("/landingPage")
})

// This is the first route you will see when you access our application
app.get("/landingPage", (req,res)=>{
    res.render("landingPage.ejs")
})

// This route is the one you will gain access to by hitting the "Sign Up" button in the landingPage route
app.get("/signupPage", (req,res)=>{
    res.render("signupPage.ejs")
})

// This route is what sends a username, email, and password to our database when the "Create Account" button is pressed
app.post("/createAccount", (req ,res) => {
    let newUserLoginModel = new UserLoginModel({
        Username: req.body.Username,
        Email: req.body.Email,
        Password: req.body.Password
    })
    newUserLoginModel.save();
    res.redirect("/createProfilePage")
});

// This is the route that you get taken to after submitting your account information, you will the proceed to create
// your profile here
app.get("/createProfilePage", (req,res)=>{
    res.render("createProfilePage.ejs")
})

// This route fires once the profiles required information has been submitted, this is achieved by clicking the submit button
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

// This route shows you what your profile looks like once it has been submitted to the database, this information is pull via a 
// get request
app.get("/viewProfilePage", async (req,res)=>{
    const Users = await GoTogetherModel.find({});
    res.render("viewProfilePage.ejs", { Users })
})

// This route gets information from TMDB using their API, this will show you an image and description of the 
// a persons favorite movie when clicking the name of the movie in their profile.
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

// This route is what the dashboard looks like for your account it has a calendar, as well as a mock up event for something you
// signed up for
app.get("/homePage", (req,res)=>{
    res.render("homePage.ejs")
})

// This route is what you see upon clicking the edit button in your profile tab, it fills in the information in your profile
// in the submitted fields and allow you to update your profile
app.get("/editProfilePage", async (req,res)=>{
    const Users = await GoTogetherModel.findOne({})
    res.render("editProfilePage.ejs", { Users })
})

app.post("/editProfile", async (req, res) => {
    const { Profile_Image, First_Name, Last_Name, Birthday,
            Age, Gender, Current_City, Hometown, Profession, Interests,
        Favorite_Movie, Favorite_Artist, Favorite_Food, Languages, More_About_You } = req.body;
        const currentProfile = await GoTogetherModel.findOne({})
        if (!currentProfile) {
            return res.status(404).send("Could not retrieve profile");
        }
        currentProfile.Profile_Image = Profile_Image
        currentProfile.First_Name = First_Name
        currentProfile.Last_Name = Last_Name
        currentProfile.Birthday = Birthday
        currentProfile.Age = Age
        currentProfile.Gender = Gender
        currentProfile.Current_City = Current_City
        currentProfile.Hometown = Hometown
        currentProfile.Profession = Profession
        currentProfile.Interests = Interests
        currentProfile.Favorite_Movie = Favorite_Movie
        currentProfile.Favorite_Artist = Favorite_Artist
        currentProfile.Favorite_Food = Favorite_Food
        currentProfile.Languages = Languages
        currentProfile.More_About_You = More_About_You
        await currentProfile.save();
        res.redirect("/viewProfilePage");
})

// This route is what shows when you select the delete profile button in the homepage, it then takes you to a confirmation page
app.get("/deleteProfilePage", (req,res)=>{
    res.render("deleteProfilePage.ejs")
})

app.post("/deleteProfile", async (req, res) => {
    await GoTogetherModel.deleteMany({})
    .then(res.redirect("/deletionConfirmationPage"))
    .catch(err => {
        console.log('Error deleting from db: ', err)
        res.status(450)
    })
})

// This route will give you a final warning that you are about to delete your profile from our database, proceed with caution
app.get("/deletionConfirmationPage", (req,res)=>{
    res.render("deletionConfirmationPage.ejs")
})

app.listen(port,()=> console.log(`GoTogether is running on port${port}`))
