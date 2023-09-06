// need line 2 to run first because you want .env variables active in your instance
require("dotenv").config();
// CONNECTION
// create a constant to require mongoose
const mongoose = require("mongoose");
// destructure
const {DB, URI, ROUTE} = process.env;
// console.log(DB, " ", URI);
const endpoint = `${URI}/${DB}${ROUTE}`;

const connectionObject = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// this is promised base, can use .then and .catch to validate if connection works
mongoose.connect(endpoint, connectionObject)
.then(()=> console.log(`Connected to ${DB} database`))
.catch(error => console.log(`Error connecting to ${DB} database: `, error));
