const usersBase = require("../models/user")

const userControllers = {
    checkIfUserExists: async (email) => {
        try {
            const search = await usersBase.searchByEmail(email)
            return search.length
        } catch (error) {
            console.error(error)
        }
    },

    registerNewUser: async (req, res) => {
        const body = req.body
        if(await userControllers.checkIfUserExists(body.email) == 0) {
            usersBase.add(body.name, body.email, body.password)
            res.send({
                message: "Usuario registrado com sucesso!",
                status: "success"
            })
        } else {
            res.send({
                message: "Email já cadastrado",
                status: "alert"
            })
        }
    },

    loginUser: async (req, res) => {
        const body = req.body
        console.log("Chaegou aqui")
        if(await userControllers.checkIfUserExists(body.email) == 1) {
            const data = await usersBase.searchByEmail(body.email)
            if(body.password == data[0].password) {
                res.send("Login Realizado!")
            } else {
                res.send("Senha incorreta!")
            }
        } else {
            res.send("Email não cadastrado!")
        }
    }
} 

module.exports = userControllers