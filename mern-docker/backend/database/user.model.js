// Importar mongoose
const mongoose = require('mongoose')

// Definir el esquema de usuario
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // Puedes agregar validaciones de formato de correo electrónico aquí
    },
    password: {
        type: String,
        required: true,
        // Puedes agregar más validaciones de contraseña aquí
    },
    birthday: {
        type: Date,
        required: true,
    },
    level: {
        type: String,
        // Puedes definir opciones específicas para el nivel de habilidad (principiante, intermedio, avanzado, etc.)
    },
    historyWorkout: {
        type: [String], // O puedes usar un tipo de documento más complejo si necesitas más información sobre cada entrenamiento
    },
})

// Crear el modelo de usuario
const Usuario = mongoose.model('User', userSchema)

// Exportar el modelo para su uso en otros archivos
module.exports = Usuario
