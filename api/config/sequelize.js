// Coniguración de DB con Sequelize (dev07)

const { Sequelize } = require("sequelize");

const { envVars } = require("./../config/env");
const sequelizeConfigs = require("../db/config");

const setupModels = require("../db/models");

const sequelize = new Sequelize(
    envVars.env === "production"
        ? sequelizeConfigs.production
        : sequelizeConfigs.development
);

// Se añaden modelos (dev07)
setupModels(sequelize);

// Sincronizar los nuevos modelos
// sequelize.sync()

module.exports = sequelize;
