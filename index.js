const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    // req. request
    // res. response

    res.send('Server en express')

})

app.get('/items', (req, res) => {
    // req. request
    // res. response

    res.json({ 
        nombre: "item 1",
        cantidad: 3
    })

})

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server corriendo en ${PORT}`)
})