// have installed express, ejs, morgan, dotenv,mongoose
// can be installed: joi, nodemon

require("dotenv").config()
const express= require("express")
const app = express()
const port = process.env.PORT||3000
const logger = require("morgan")

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
    const api_key=process.env.TMDB_API_KEY
    const baseUrl="https://api.themoviedb.org/3"
    let route=`search/movie?include_adult=false&language=en-US&page=1&api_key=${api_key}&query=${req.query.titlesearch}`
    let endpoint=`${baseUrl}/${route}`

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

app.get("/editProfilePage", (req,res)=>{
    res.render("editProfilePage.ejs")
})

app.get("/deleteProfilePage", (req,res)=>{
    res.render("deleteProfilePage.ejs")
})

app.get("deletionConfirmation/Page", (req,res)=>{
    res.render("deletionConfirmation.ejs")
})

app.listen(port,()=> console.log(`GoTogether is running on port${port}`))
