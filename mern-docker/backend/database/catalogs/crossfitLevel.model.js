const mongoose = require('mongoose')

// Define el esquema para los distintos niveles de CrossFit
const crossFitLevelSchema = new mongoose.Schema({
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

// Crea el modelo para los distintos niveles de CrossFit
const CrossFitLevel = mongoose.model('CrossFitLevel', crossFitLevelSchema)

// Exporta el modelo para su uso en otros archivos
module.exports = CrossFitLevel
