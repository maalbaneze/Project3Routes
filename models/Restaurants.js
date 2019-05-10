const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import mongoose, { Schema } from 'mongoose';

// Define restaurant schema
let RestaurantSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    zip: {
        type: String,
        validate: {
            validator: function (v) {
                return /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/.test(v);
            },
            message: props => `${props.value} is not a valid zip code`
        },
        // required: [true, 'US zip code required']
    },
    postal: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/.test(v);
            },
            message: props => `${props.value} is not a valid postal code`
        },
        // required: [false, 'Postal code required']
    },
    meals: [{
        type: Schema.Types.ObjectId, ref: 'Meal'
    }],
});


// Export Mongoose model
module.exports = mongoose.model('Restaurant', RestaurantSchema);