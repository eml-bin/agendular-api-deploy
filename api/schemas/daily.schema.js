// Ejemplo esquema con Joi para validar datos (dev09)

const Joi = require('joi')

const note = Joi.string().min(15).max(150)
const emotion = Joi.string()
const color = Joi.string()

// const price = Joi.number().integer().min(10)

const createDailySchema = Joi.object({
    note: note.required(),
    emotion: emotion.required(),
    color: color.required()
})

const updateDailySchema = Joi.object({
    note: note,
    emotion: emotion,
    color: color
})

module.exports = { 
    createDailySchema,
    updateDailySchema
}