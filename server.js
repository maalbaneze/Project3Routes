// Require our Node packages express and mongoose (for our MongoDB)
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Require our routes in folder "routes"
const routes = require("./routes");

// Make express our app for use
const app = express();

// Use Morgan to log outputs of all requests into the console
app.use(morgan('combined'));

// Declare port for prouction via production server, or default to localhost 3001 
const PORT = process.env.PORT || 3001;

// Allow express to send data to our html pages
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// If in production environemnt (i.e., deployed), use the below routing to a build folder that is created when we run npm build command 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
//Tells our app to use the routes we have in routes folder
app.use(routes);
// Connect to the mongoose server on Heroku, db name below
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://adminMAA:UWcbc2019@ds153566.mlab.com:53566/heroku_k9zhv6dj",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);
// Start our server listening on whichever port we are using (production or local)
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
