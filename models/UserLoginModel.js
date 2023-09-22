// BLUEPRINT for UserLogins
// will be used to store Emails and Passwords
const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose')

// this will define the schema
const UserLoginSchema = mongoose.Schema({
    username: {
        type: String,
        maxLength: [15, "Must be less than 15 characters!"],
        required: [true, "Username must be provided to create an account!"],
        set: a => a === '' ? undefined : a
    },

    // Email: {
    //     type: String,
    //     required: [true, "Email must be provided to create an account!"],
    //     set: b => b === '' ? undefined : b
    // },

    password: {
        type: String,
        minLength: [6, "Must be at least 6 characters long!"],
        maxLength: [20, "Must be less than 20 characters!"],
        required: [true, "Password must be provided to create an account!"],
        set: b => b === '' ? undefined : b
    }
});

UserLoginSchema.plugin(passportLocalMongoose);

// exports.UserLoginModel = mongoose.model("Accounts", UserLoginSchema)

module.exports = mongoose.model('User', UserLoginSchema)