const mysql = require('mysql2')
require('dotenv').config()

const database = mysql.createConnection(process.env.DATABASE_URL)
console.log("Conectado ao banco de dados!");

module.exports = { database }