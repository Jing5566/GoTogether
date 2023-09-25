// BLUEPRINT for UserLogins
// will be used to store Emails and Passwords
const mongoose = require("mongoose");

// This is the schema that will take in the users account information
const UserLoginSchema = mongoose.Schema({
    // Users Username
    Username: {
        type: String,
        maxLength: [15, "Must be less than 15 characters!"],
        required: [true, "Username must be provided to create an account!"],
        set: a => a === '' ? undefined : a
    },
    // Users Email
    Email: {
        type: String,
        required: [true, "Email must be provided to create an account!"],
        set: b => b === '' ? undefined : b
    },
    // Users Password
    Password: {
        type: String,
        minLength: [6, "Must be at least 6 characters long!"],
        maxLength: [20, "Must be less than 20 characters!"],
        required: [true, "Password must be provided to create an account!"],
        set: c => c === '' ? undefined : c
    }
});

// Lets you use this model outside of this file
exports.UserLoginModel = mongoose.model("Accounts", UserLoginSchema)