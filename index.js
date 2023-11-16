const express = require('express')
const routerAPI = require('./routes')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    // req. request
    // res. response

    res.send('Server en express')
})

routerAPI(app)

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server corriendo en ${PORT}`)
})