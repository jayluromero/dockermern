const mongoose = require('mongoose')

// Define the exercise type schema
const exerciseTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    muscleGroup: {
        type: String,
        required: true,
    },
})

// Create the exercise type model
const ExerciseType = mongoose.model('ExerciseType', exerciseTypeSchema)

// Export the model for use in other files
module.exports = ExerciseType
