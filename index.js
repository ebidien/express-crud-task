//Create express app
const express = require('express');
const app = express();

//Retrieve environment variables
require("dotenv").config();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const contactsRoute = require('./routes');
app.use('/', contactsRoute);

//Setup Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});

//Setup Mongoose
const mongoose = require('mongoose');
const connectionString = process.env.MONGO_URL;

mongoose.connect(
    connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) {
            console.log("Something went wrong:", err);
        } else {
            console.log("Connection to MongoDB Atlas was successful.")
        }
    }
);