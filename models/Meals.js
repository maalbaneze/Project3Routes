const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import mongoose, { Schema } from 'mongoose';

// Define meal schema
let MealSchema = new Schema({
    mealType: String,
    mealName: {
        type: String,
    },
    mealDesc: String,
    carbCount: {
        type: Number,
        min: 0,
        max: 300
    },
});

// Export Mongoose model
module.exports = mongoose.model('Meal', MealSchema);