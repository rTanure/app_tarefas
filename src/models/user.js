const { database } = require('../../config/database')

const user = {
    createTable: async () => {
        try {
            const query = `
                CREATE TABLE IF NOT EXISTS users (
                    id INT NOT NULL AUTO_INCREMENT,
                    name VARCHAR(100) NOT NULL,
                    email VARCHAR(100) NOT NULL,
                    password VARCHAR(50) NOT NULL,
                    section INT,
                    PRIMARY KEY (id)
                ) ENGINE = InnoDB
            `   
            database.query(query)
            console.log("Tabela users criada com sucesso!")
    
        } catch(error) {
            console.error("Erro ao criar tabela users: " + error)
        }
    },

    add: async (name, email, password) => {
        try {
            const query = `
                INSERT INTO users VALUES (
                    null,
                    "${name}",
                    "${email}",
                    "${password}",
                    null
                )
            `
            let result = await database.promise().query(query)
            return result
            
        } catch (error) {
            return error
        }
    },

    searchByEmail: async (email) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM users WHERE email = "${email}"`
                database.query(query, (error, rows) => {
                    resolve(rows);
                })
            })
        } catch (error) {
            console.error("Erro ao capturar usario pelo email: " + error)
        }
    },
}


module.exports = user