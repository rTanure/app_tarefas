const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const { database } = require("./database/config.js")



app.use(bodyParser.json())

app.get(`/`, (req, res)=>{
    database.query("SELECT * FROM users", (err, rows) => {
        if (err) throw res.send(err)
        res.send(rows)
    })
})

app.post("/user/new", (req, res) => {
    const data = req.body
    database.query(`INSERT INTO users VALUES (null, "${data.name}", "${data.email}", "${data.password}", 8457)`, (err, rows)=>{
        if(err) throw err
        res.send(rows)
        console.log("Chegou aqui")
    })
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})