import mongoose, { Schema } from 'mongoose';

// Define user schema
var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  email: String,
  password: String,
  addToMailing: Boolean,
});

// Export Mongoose model
export default mongoose.model('user', UserSchema);