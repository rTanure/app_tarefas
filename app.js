const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const { database } = require("./database/config.js")
const { addNewUser, checkEmail } = require('./database/functions.js')

app.use(bodyParser.json())

app.get(`/`, (req, res)=>{
    database.query("SHOW COLUMNS FROM tasks", (err, rows) => {
        if (err) throw res.send(err)
        res.send(rows)
    })
})

app.post("/user/new", (req, res) => {
    const content = req.body
    if(!checkEmail(content.email)) {
        res.send(addNewUser(content.name, content.email, content.password))
    } else {
        res.send("Usuário já cadastrado na base de dados!")
    }
})

app.post("/user/login", (req,res) => {
    const content = req.body

    if(checkEmail())
    database.query(`SELECT * FROM users WHERE email = "${content.email}"`, (err, rows) => {
        if(err) throw err
        if (rows.length == 0) {
            res.send(addNewUser(content.name, content.email, content.password))
        } else {
            res.send("Usuário já cadastrado na base de dados!")
        }
    })
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})