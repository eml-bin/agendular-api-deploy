require('dotenv').config()

const envVars = {
    env: process.env.NODE_ENV || 'dev',
    dbHost: process.env.PGHOST,
    dbName: process.env.PGDATABASE,
    dbUser: process.env.PGUSER,
    dbPwd: process.env.PGPASSWORD 
}

module.exports = { envVars }