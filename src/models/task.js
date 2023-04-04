const { response } = require("express")
const { database } = require("../../config/database")

const taskBase = {
    createTable: async () => {
        try {
            const query = `
                CREATE TABLE IF NOT EXISTS tasks (
                    id INT NOT NULL AUTO_INCREMENT,
                    title VARCHAR(100) NOT NULL,
                    description VARCHAR(255),
                    due_date DATETIME,
                    is_completed TINYINT DEFAULT 0 NOT NULL,
                    user_id INT NOT NULL,
                    PRIMARY KEY (id)
                ) ENGINE = InnoDB
            `   
            database.query(query)
            console.log("Tabela tasks criada com sucesso!")
    
        } catch(error) {
            console.error("Erro ao criar tabela tasks: " + error)
        }
    },

    addTaks: async (body) => {
        try {
            const query = `INSERT INTO tasks VALUES (
                null,
                "${body.title}",
                "${body.description}",
                "${body.due_date}",
                0,
                "${body.user_id}"
            )`

            database.query(query, (err, rows) => {
                // return(rows)
                // Retornar Promise aqui
            })
        } catch (error) {
            console.error("Erro ao adicionar nova tarefa")
        }
    },

    updateTask: async (body) => {
        return new Promise((resolve, reject) => {
            const query = `UPDATE tasks SET
                title = "${body.title}",
                description = "${body.description}",
                due_date = "${body.due_date}",
                is_completed = ${body.is_completed}
            WHERE id = ${body.task_id};`

            database.query(query, (error, rows) => {
                if(error) throw error
                resolve(rows)
            })
        })
    },

    getUserId: async (task_id) => {
        return new Promise((resolve) => {
            const query = `SELECT user_id FROM tasks WHERE id = ${task_id}`
            database.query(query, (error, rows) => {
                if(error) throw error
                if(rows.length == 0) {
                    resolve(false)
                } else {
                    resolve(rows[0].user_id)
                }
            })
        })
    }
}

module.exports = taskBase