const mongoose = require('mongoose')

// Define the workout type schema
const workoutTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
})

// Create the workout type model
const WorkoutType = mongoose.model('WorkoutType', workoutTypeSchema)

// Export the model for use in other files
module.exports = WorkoutType
