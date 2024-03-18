const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const userDataSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    predicted_category: {
        type: String,
        required: true
    },
    family_points: {
        type: Number,
        default: 0 // Default value for family_points
    },
    date: {
        type: Date,
        default: Date.now // Default value for date is current timestamp
    }
});

// Create the model
const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;
