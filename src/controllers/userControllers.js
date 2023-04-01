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
            res.send("Usuario adicionado com sucesso!")
        } else {
            res.send("Email já cadastrado!")
        }
    }
} 

module.exports = userControllers