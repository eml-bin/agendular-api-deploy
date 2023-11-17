// Crear nuevas rutas de dailies para agendular (dev06)

const express = require('express')
const DailiesService = require('../services/dailies.service')

const router = express.Router()         // Router
const service = new DailiesService()    // Dailies Service

router.get('/', async (req, res) => { 
    try {
        const dailies = await service.all()     // async/await del método all
        res.status(200).json(dailies)
    } catch {
        res.status(500)
    }
})

module.exports = router