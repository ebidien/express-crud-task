const mongoose = require("mongoose");

//Create Database Schema
const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }
);

module.exports= mongoose.model("Contact", contactSchema);