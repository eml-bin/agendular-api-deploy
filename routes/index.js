const express = require('express')
const itemsRouter = require('./items.router')

function routerApi(app) {
    const router = express.Router()
    app.use('/api/v1', router)
    
    router.use('/items', itemsRouter);
    // app.use('/dailies', dailiesRouter);
}

module.exports = routerApi