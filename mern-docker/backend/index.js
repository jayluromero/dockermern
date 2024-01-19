const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();
colors.enable();

const Anim = require("./database/anim.model");
const User = require("./database/user.model");
const CrossfitLevel = require("./database/catalogs/crossfitLevel.model");
const ExcersiceType = require("./database/catalogs/excersiceType.model");
const WorkoutType = require("./database/catalogs/workoutType.model");
const CrossfitClass = require("./database/crossfitClass.model");

const connect = require("./database/connect");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// Importar controladores
const crossFitLevelController = require('./Controller/catalogs/crossfitLevel.controller');
const exerciseTypeController = require('./Controller/catalogs/excersiceType.controller');
const workoutTypeController = require('./Controller/catalogs/workoutType.controller');


// Rutas para CrossFit Levels
app.get('/api/levels', crossFitLevelController.getAllLevels);
app.post('/api/levels', crossFitLevelController.createLevel);

// Rutas para Exercise Types
app.get('/api/exercise-types', exerciseTypeController.getAllExerciseTypes);
app.post('/api/exercise-types', exerciseTypeController.createExerciseType);

// Rutas para Workout
app.get('/api/classes', workoutTypeController.getAllWorkoutType);
app.post('/api/classes', workoutTypeController.createWorkoutType);


app.get("/", (req, res) => {
  console.log("Hello World!".america);

  res.send("Hello World!");
});

app.get("/api/anime", async (req, res) => {
  const anime = await Anim.find();
  res.json(anime);
});

app.post("/api/anime", async (req, res) => {
  const anime = new Anim(req.body);
  await anime.save();
  res.json(anime);
});



// Lógica del Seeder
async function seedCrossFitLevels() {
  try {
    await CrossfitLevel.deleteMany(); // Opcional: elimina todos los registros existentes

    const crossFitLevelsData = [
      { name: 'Beginner', description: 'Introduction to CrossFit for beginners.' },
      { name: 'Intermediate', description: 'For those with some CrossFit experience looking to advance their skills.' },
      { name: 'RX', description: 'Challenging workouts for experienced CrossFit athletes.' },
    ];

    const insertedLevels = await CrossfitLevel.insertMany(crossFitLevelsData);

    console.log('CrossFit Levels seeded successfully:', insertedLevels);
  } catch (error) {
    console.error('Error seeding CrossFit Levels:', error);
  }
}

seedCrossFitLevels()

app.listen(8000, () => {
  console.log("server listening on port 8000");

  // connect to the database
  connect();
});
