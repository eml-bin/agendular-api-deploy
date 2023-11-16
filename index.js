const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    // req. request
    // res. response

    res.send('Server en express')

})

// GET

app.get('/items', (req, res) => {
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

app.get('/items/view', (req, res) => {
    res.type('html').send('<p>Items View</p>')
})

app.get('/items/:id', (req, res) => {
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

// Ocasiona un issue de routing (choque de rutas)
// app.get('/items/view', (req, res) => {
//     res.type('html').send('<p>Items View</p>')
// })

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server corriendo en ${PORT}`)
})