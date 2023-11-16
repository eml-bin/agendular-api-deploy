const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    // req. request (solicitud/petición)
    // res. response (respuesta)

    const { category } = req.query

    const ITEMS = [
        { 
            nombre: "item 1",
            cantidad: 3,
            category: "A"
        },
        { 
            nombre: "item 2",
            cantidad: 1,
            category: "B"
        }
    ]

    if (category) {
        // El método filter devuelve siempre un arreglo
        res.json(ITEMS.filter(item => item.category === category))
    } else {
        res.json(ITEMS)
    }

})

router.get('/view', (req, res) => {
    res.type('html').send('<p>Items View</p>')
})

router.get('/:id', (req, res) => {
    // req. request (solicitud/petición)
    // res. response (respuesta)
    
    const { id } = req.params; // # params

    res.json(
        { 
            id: id, 
            nombre: "item 1",
            cantidad: 3,
            category: "A"
        }
    )

})

module.exports = router
