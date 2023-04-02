// Express config
const express = require('express')
const app = express()

// JSON config
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const userControllers = require("./controllers/userControllers.js")


app.post("/user/register", userControllers.registerNewUser)
app.post("/user/login", userControllers.loginUser)


const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})