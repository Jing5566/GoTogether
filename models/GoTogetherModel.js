// BLUEPRINTS - Schema & Models
// need to import our Schema & Model 
const mongoose = require("mongoose")

// define schema
const GoTogetherUserSchema = mongoose.Schema({
        // mongoDB cannot store large images. 
        // Workaround is to utilize cloudinary to store the images
        // use url link
        Profile_Image: {
            type: String
        },

        First_Name: {
            type: String,
            maxLength: [20, "Must be less than 20 characters"],
            required: [true, "First Name required"]
        },

        Last_Name: {
            type: String,
            maxLength: [20, "Must be less than 20 characters"],
            required: [true, "First Name required"]
        },

        Birthday: {
            type: Date,
            required: [true, "Birthdate must be entered."]
        },

        Age: {
            type: Number
        },

        Gender: {
            type: String
        },

        Current_City: {
            type: String
        },

        Hometown: {
            type: String
        },

        Profession: {
            type: String
        },
        
        Interests: {
            type: String
        },

        // movie API to be used for this section?
        Favorite_Movie: {
            type: String
        },
        
        Favorite_Artist: {
            type: String
        },

        Favorite_Food: {
            type: String
        },

        Languages: {
            type: String
        },

        More_About_You: {
            type: String,
            maxLength: [500, "Must be less than 500 characters"]
        }
    }
);

exports.GoTogetherModel = mongoose.model("user_info", GoTogetherUserSchema)