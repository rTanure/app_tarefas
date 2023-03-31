const mysql = require('mysql')

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "app_tarefas"
})

database.connect((err) => {
    if(err) throw err
    console.log("Conectado ao banco de dados")
})

module.exports = { database }