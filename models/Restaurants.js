import mongoose, { Schema } from 'mongoose';

// Define restaurant schema
var RestaurantSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
    location: String,
    // times: Array,
});

// Export Mongoose model
export default mongoose.model('restaurant', RestaurantSchema);