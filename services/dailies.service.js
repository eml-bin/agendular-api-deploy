// Servicio de Dailies con BD SQLite (dev06)

const getConnection = require("../config/sqlite");

class DailiesService {
    constructor() {
        this.dailies = [];
        this.db = getConnection();
    }

    create() {}

    // Crear método para obtener todos (dev06)
    async all() {
        const rows = await new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM dailies", (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });

        return rows
    }
}

module.exports = DailiesService;
