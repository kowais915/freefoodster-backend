const express = require("express");
const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const MealSchema = new Schema({

    title: {
        type: String,
        required: true
    }, 
    location: {
        type: String,
        required: true
    },
    persons: {
        type: String, 
        required: true
    },
    availible: {
        type: Boolean,
        required: true
    }

});

const Meal = mongoose.model("Meal", MealSchema);

module.exports = {
    Meal
}
