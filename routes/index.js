const itemsRouter = require('./items.router')

function routerApi(app) {
    app.use('/items', itemsRouter);
    // app.use('/dailies', dailiesRouter);
}

module.exports = routerApi