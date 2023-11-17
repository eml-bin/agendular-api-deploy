// Crear nuevas rutas de dailies para agendular (dev06)

const express = require('express')
const DailiesService = require('../services/dailies.service')

const router = express.Router()         // Router
const service = new DailiesService()    // Dailies Service

// Crear nuevo daily con sequelize ORM (dev07)
router.post('/', async (req, res) => {
    try {
        const body = req.body
        const newDaily = await service.create(body)
        res.status(201).json(newDaily)
    } catch(error) {
        res.status(500).json({ error: "¡Ocurrió un error!"})
    }
})

// Obtener dailies con sequelize ORM (dev07)
router.get('/', async (req, res) => { 
    try {
        const dailies = await service.all()     // async/await del método all
        res.status(200).json(dailies)
    } catch {
        res.status(500)
    }
})

module.exports = router