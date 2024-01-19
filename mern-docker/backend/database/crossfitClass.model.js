const mongoose = require('mongoose')

// Define el esquema para la programación de una clase de CrossFit
const crossFitClassSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true,
    },
    levelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CrossFitLevel',
        required: true,
    },
    exercises: [
        {
            exerciseId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ExerciseType',
                required: true,
            },
            repetitions: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
            },
            time: {
                type: Number,
            },
        },
    ],
})

// Crea el modelo para la programación de una clase de CrossFit
const CrossFitClass = mongoose.model('CrossFitClass', crossFitClassSchema)

// Exporta el modelo para su uso en otros archivos
module.exports = CrossFitClass
