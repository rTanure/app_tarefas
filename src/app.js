// Express config
const express = require('express')
const app = express()

// JSON config
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const userControllers = require("./controllers/userControllers.js")
const taskControllers = require("./controllers/taskControllers.js")

app.post("/user/register", userControllers.registerNewUser)
app.post("/user/login", userControllers.loginUser)

app.post("/task/new", taskControllers.addTask)
app.post("/task/update", taskControllers.updateTask)


const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})