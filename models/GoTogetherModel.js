// BLUEPRINTS - Schema & Models
// need to import our Schema & Model 
const mongoose = require("mongoose")

// This Schema is used to take in information passed into a form to create a users profile
const GoTogetherUserSchema = mongoose.Schema({
        // mongoDB cannot store large images. 
        // Workaround is to utilize cloudinary to store the images
        // use url link
        // Could not get cloudinary to work, we got around this by allowing user to use an image address to use
        // as thier profile image
        Profile_Image: {
            type: String,
            required: false,
            set: a => a === '' ? undefined : a
        },
        // Users First name
        First_Name: {
            type: String,
            maxLength: [20, "Must be less than 20 characters"],
            required: [true, "First Name required"],
            set: b => b === '' ? undefined : b
        },
        // Users Last name
        Last_Name: {
            type: String,
            maxLength: [20, "Must be less than 20 characters"],
            required: [true, "First Name required"],
            set: c => c === '' ? undefined : c
        },
        // Users Birthday
        Birthday: {
            type: String,
            required: [true, "Birthdate must be entered."],
            set: d => d === '' ? undefined : d
        },
        // Users Age
        Age: {
            type: Number,
            required: false,
            set: e => e === '' ? undefined : e
        },
        // The users preferred Gender
        Gender: {
            type: String,
            required: false,
            set: f => f === '' ? undefined : f
        },
        // Where the user currently resides
        Current_City: {
            type: String,
            required: false,
            set: g => g === '' ? undefined : g
        },
        // Where the user is originally from
        Hometown: {
            type: String,
            required: false,
            set: h => h === '' ? undefined : h
        },
        // The users current Profession
        Profession: {
            type: String,
            required: false,
            set: i => i === '' ? undefined : i
        },
        // The users interests
        Interests: {
            type: String,
            required: false,
            set: j => j === '' ? undefined : j
        },
        // The users favorite movie, the TMDB api will be used with this input
        Favorite_Movie: {
            type: String,
            required: false,
            set: k => k === '' ? undefined : k
        },
        // The users favorite music artist
        Favorite_Artist: {
            type: String,
            required: false,
            set: l => l === '' ? undefined : l
        },
        // The users favorite food
        Favorite_Food: {
            type: String,
            required: false,
            set: m => m === '' ? undefined : m
        },
        // Lanuages the user can speak
        Languages: {
            type: String,
            required: false,
            set: n => n === '' ? undefined : n
        },
        // A brief summary of a person
        More_About_You: {
            type: String,
            maxLength: [500, "Must be less than 500 characters"],
            required: false,
            set: o => o === '' ? undefined : o
        }
    }
);

exports.GoTogetherModel = mongoose.model("Profiles", GoTogetherUserSchema)