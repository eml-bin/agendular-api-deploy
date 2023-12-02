// Archivo de configuración para migrations (dev08)

const { envVars } = require('../config/env')
const pg = require('pg')

module.exports = {
    development: { 
        storage: "database.db", 
        dialect: "sqlite" 
    },
    production: {
        dialect: "postgres",
        dialectModule: pg,
        host: envVars.dbHost,
        port: 5432,
        username: envVars.dbUser,
        password: envVars.dbPassword,
        database: envVars.dbName,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    },
};
