// Test PR

const express = require('express')
const routerAPI = require('./routes')
const cors = require('cors')
const app = express()
const PORT = 3000

const { loggerError, errorHandler, boomErrorHandler } = require('./middlewares/error.middleware')

app.use(express.json()) // middleware (dev04)

// const corsOptions = {
//     origin: 'http://miotrodominio.com', // o '*' para permitir desde cualquier origen
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Habilita el envío de credenciales (por ejemplo, cookies y encabezados de autorización)
//     optionsSuccessStatus: 204, // Algunos navegadores (por ejemplo, Chrome) envían una solicitud OPTIONS antes de una solicitud POST, esto indica que la solicitud CORS fue exitosa
// };

app.use(cors())

app.get('/', (req, res) => {
    // req. request
    // res. response
    
    res.send('Server en express')
})

routerAPI(app)

app.use(loggerError)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server corriendo en ${PORT}`)
})