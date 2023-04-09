const { database } = require('../../config/database')

const user = {
    createTable: async () => { // Código de criação da tabela users
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

    // ADICIONAR UM NOVO USUARIO
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

    // PESQUISA UM USUARIO PELO EMAIL
    searchByEmail: async (email) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM users WHERE email = "${email}"`
                database.query(query, (error, rows) => {
                    if(error) throw error
                    resolve(rows);
                })
            })
        } catch (error) {
            console.error("Erro ao capturar usario pelo email: " + error)
        }
    },

    // PESQUISA UM USUARIO PELO EMAIL
    searchById: async (id) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM users WHERE id = ${id}`
                database.query(query, (error, rows) => {
                    if(error) throw error
                    resolve(rows[0]);
                })
            })
        } catch (error) {
            console.error("Erro ao capturar usario pelo id: " + error)
        }
    },

    // PESQUISA UM USUARIO PELO SEU CODIGO DE SEÇÃO
    searchBySection: async (section) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `SELECT * FROM users WHERE section = ${section}`
                database.query(query, (error, rows) => {
                    if(error) throw error
                    resolve(rows)
                })
            })
        } catch (error) {
            console.error("Erro ao buscar seção: " + error)
        }
    },

    // ATUALIZA O CODIGO DE SEÇÃO DE UM USUARIO
    updateUserSectionCode: async (userId, newSection) => {
        try {
            return new Promise((resolve, reject) => {
                const query = `UPDATE users SET section = ${newSection} WHERE id = ${userId}`
                database.query(query, (error, rows) => {
                    if(error) throw error
                    resolve(rows)
                })
            })
        } catch (error) {
            console.error(error)
        }
    }
}


module.exports = user