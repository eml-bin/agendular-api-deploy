// Servicio de Dailies con BD SQLite (dev06)

// const getConnection = require("../data/sqlite");
const sequelize = require('../data/sequelize')
const { models } = require('../data/sequelize')

class DailiesService {
    constructor() {
        this.dailies = [];
        this.db = sequelize;
    }

    // Crear con ORM de Sequelize (dev07)
    async create(data) {
        const newDaily = await models.Daily.create(data)
        return newDaily
    }

    // Crear método para obtener todos (dev06)
    async all() {

        // Utilizar findAll de ORM Sequelize (dev07)
        const dailies = await models.Daily.findAll()
        return dailies


        // const queryAll = 'SELECT * FROM dailies' // Ejecutando query con sequelize (dev07)
        
        // // Sequelize devuelve este tipo de queries en un array [data, metadata]
        // const [data] = await this.db.query(queryAll)   
        
        // return data

        // const rows = await new Promise((resolve, reject) => {
        //     this.db.all("SELECT * FROM dailies", (err, rows) => {
        //         if (err) {
        //             reject(err);
        //         } else {
        //             resolve(rows);
        //         }
        //     });
        // });

        // return rows
    }

    // Actualizar con ORM Sequelize (dev07)
    async update(changes) {
        // const daily = await models.Daily.findByPk
        const daily = await models.Daily.findOne({
            where: {
                timestamp: Math.floor(Date.now/1000)
            }
        })

        const dailyChange = daily.update(changes)

        return dailyChange

    }
}

module.exports = DailiesService;
