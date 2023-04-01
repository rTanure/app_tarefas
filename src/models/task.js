const { database } = require("../../config/database")

const task = {
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
}