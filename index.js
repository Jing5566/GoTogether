// have installed express, ejs, morgan, dotenv,
// can be installed: joi, nodemon

require("dotenv").config()
const express= require("express")
const app = express()
const port = process.env.PORT||3000
const logger = require("morgan")

// Grab the database information from mongoconnection
// and inserts into file
require('./connections/mongoconnection')


// need to import our models
const { GoTogetherModel } = require("./models/GoTogetherModel");



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

app.get("/createProfilePage", (req,res)=>{
    res.render("createProfilePage.ejs")
})

app.get("/viewProfilePage", (req,res)=>{
    res.render("viewProfilePage.ejs")
})

app.get("/movieInfoPage", (req,res)=>{
    res.render("movieInfoPage.ejs")
})

app.get("/homePage", (req,res)=>{
    res.render("homePage.ejs")
})






app.listen(port,()=> console.log(`GoTogether is running on port${port}`))
