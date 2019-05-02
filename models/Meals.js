import mongoose, { Schema } from 'mongoose';

// Define meal schema
var MealSchema = new Schema({
    meal: String,
    name: {
        type: String,
        unique: true,
    },
    mealDesc: String,
    carbCount: Int,
});

// Export Mongoose model
export default mongoose.model('meal', MealSchema);