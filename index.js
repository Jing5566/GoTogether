// have installed express, ejs, morgan, dotenv,
// can be installed: joi, nodemon
const express= require("express")
const app = express()
const port = process.env.PORT||3000
const logger = require("morgan")
app.use(logger("dev"))



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






app.listen(port,()=> console.log(`GoTogether is running on port${port}`))
