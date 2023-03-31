const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const { database } = require("./database/config.js")
const { addNewUser } = require('./database/functions.js')

app.use(bodyParser.json())

app.get(`/`, (req, res)=>{
    database.query("SHOW COLUMNS FROM tasks", (err, rows) => {
        if (err) throw res.send(err)
        res.send(rows)
    })
})

app.post("/user/new", (req, res) => {
    const response = req.body
    database.query(`SELECT * FROM users WHERE email = "${response.email}"`, (err, rows) => {
        if(err) throw err
        console.log(rows.length)
        if (rows.length == 0) {
            res.send(addNewUser(response.name, response.email, response.password))
        } else {
            res.send("Usuário já cadastrado na base de dados!")
        }
    })
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})