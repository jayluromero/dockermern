// crossFitLevelController.js
const CrossFitLevel = require('../../database/catalogs/crossfitLevel.model')

exports.getAllLevels = async (req, res) => {
    try {
        const levels = await CrossFitLevel.find()
        res.json(levels)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

exports.createLevel = async (req, res) => {
    const { name, description } = req.body

    try {
        const newLevel = new CrossFitLevel({ name, description })
        const savedLevel = await newLevel.save()
        res.status(201).json(savedLevel)
    } catch (error) {
        res.status(400).json({ error: 'Bad Request' })
    }
}


