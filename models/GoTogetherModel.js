// BLUEPRINTS - Schema & Models
// need to import our Schema & Model 
const mongoose = require("mongoose")

// define schema
const GoTogetherUserSchema = mongoose.Schema({
        // mongoDB cannot store large images. 
        // Workaround is to utilize cloudinary to store the images
        // use url link
        Profile_Image: {
            type: String,
            required: false,
            set: a => a === '' ? undefined : a
        },

        First_Name: {
            type: String,
            maxLength: [20, "Must be less than 20 characters"],
            required: [true, "First Name required"],
            set: b => b === '' ? undefined : b
        },

        Last_Name: {
            type: String,
            maxLength: [20, "Must be less than 20 characters"],
            required: [true, "First Name required"],
            set: c => c === '' ? undefined : c
        },

        Birthday: {
            type: Date,
            required: [true, "Birthdate must be entered."],
            set: d => d === '' ? undefined : d
        },

        Age: {
            type: Number,
            required: false,
            set: e => e === '' ? undefined : e
        },

        Gender: {
            type: String,
            required: false,
            set: f => f === '' ? undefined : f
        },

        Current_City: {
            type: String,
            required: false,
            set: g => g === '' ? undefined : g
        },

        Hometown: {
            type: String,
            required: false,
            set: h => h === '' ? undefined : h
        },

        Profession: {
            type: String,
            required: false,
            set: i => i === '' ? undefined : i
        },
        
        Interests: {
            type: String,
            required: false,
            set: j => j === '' ? undefined : j
        },

        // movie API to be used for this section?
        Favorite_Movie: {
            type: String,
            required: false,
            set: k => k === '' ? undefined : k
        },
        
        Favorite_Artist: {
            type: String,
            required: false,
            set: l => l === '' ? undefined : l
        },

        Favorite_Food: {
            type: String,
            required: false,
            set: m => m === '' ? undefined : m
        },

        Languages: {
            type: String,
            required: false,
            set: n => n === '' ? undefined : n
        },

        More_About_You: {
            type: String,
            maxLength: [500, "Must be less than 500 characters"],
            required: false,
            set: o => o === '' ? undefined : o
        }
    }
);

exports.GoTogetherModel = mongoose.model("user_info", GoTogetherUserSchema)