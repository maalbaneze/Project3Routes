const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import mongoose from 'mongoose';

// Define user schema
let UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: String,
  password: String,
  addToMailing: Boolean,
});

// Export Mongoose model
module.exports = mongoose.model('User', UserSchema);