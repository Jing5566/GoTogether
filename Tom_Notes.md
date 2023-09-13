This is a file filled with notes made by Tom 

I have made some changes to the GoTogetherModel, the following changes are:
From:
        Profile_Image: [
            {
                url: String,
                filename: String
            }
        ],

To:
        Profile_Image: {
            type: String
        },

From:
        Age_Range: {
            type: String
        },

To:
        Age: {
            type: Number
        },

If these changes are not welcomed, please notify me before changing them!

This is the route to use when entering mockdata
app.get("/profileCreate", (req, res) => {
    const C_Profile = new GoTogetherModel({
        First_Name: 'Thomas',
        Last_Name: 'Smith',
        Birthday: '1994-01-25',
        Profile_Image: 'https://m.media-amazon.com/images/M/MV5BMTQ0NjgzNzcwNV5BMl5BanBnXkFtZTcwODExMDYxOQ@@._V1_.jpg',
        Age: 29,
        Gender: 'Male',
        Current_City: 'San Antonio',
        Hometown: 'Laredo',
        Profession: 'Programmer',
        Interests: 'Videogames, Godzilla, Lockpicking',
        Favorite_Movie: 'Titanic',
        Favorite_Artist: 'Joji',
        Favorite_Food: 'Enchiladas',
        Languages: 'English',
        More_About_You: 'I am a nerdy guy who likes to program and play videogames!'
    })
    C_Profile.save();
    res.send(C_Profile)
})

Since I am messing with the Schema, I made a copy of the version that works for the time being!

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

Seeing as how the new edits to the Schema that I made worked, the version of the Schema Above is outdated.