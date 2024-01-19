// exerciseTypeController.js
const ExerciseType = require('../../database/catalogs/excersiceType.model')

exports.getAllExerciseTypes = async (req, res) => {
    try {
        const exerciseTypes = await ExerciseType.find()
        res.json(exerciseTypes)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.createExerciseType = async (req, res) => {
    const { name, description, muscleGroup } = req.body

    try {
        const newExerciseType = new ExerciseType({
            name,
            description,
            muscleGroup,
        })
        const savedExerciseType = await newExerciseType.save()
        res.status(201).json(savedExerciseType)
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' })
    }
}
