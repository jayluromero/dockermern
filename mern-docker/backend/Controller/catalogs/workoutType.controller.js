// exerciseTypeController.js
const WorkoutType = require('../../database/catalogs/workoutType.model')

exports.getAllWorkoutType = async (req, res) => {
    try {
        const workoutTypes = await WorkoutType.find()
        res.json(workoutTypes)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.createWorkoutType = async (req, res) => {
    const { name, description } = req.body

    try {
        const newWorkoutType = new ExerciseType({
            name,
            description
        })
        const savedWorkoutType = await newWorkoutType.save()
        res.status(201).json(savedWorkoutType)
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' })
    }
}
