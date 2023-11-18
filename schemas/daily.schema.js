// Ejemplo esquema con Joi para validar datos (dev09)

const Joi = require('joi')

const note = Joi.string().min(15).max(150)

// const price = Joi.number().integer().min(10)

const createDailySchema = Joi.object({
    note: note.required(),
})

const updateDailySchema = Joi.object({
    note: note,
})

module.exports = { 
    createDailySchema,
    updateDailySchema
}