// Funções do banco de dados
const usersBase = require("../models/user")



// Funções de email
const emailUtils = require("../utils/emailUtils")

// Funções de login
const loginUtils = require('../utils/loginUtils')



const userControllers = {
    // Checa de um email ja está cadastrado no sistema
    checkIfUserExists: async (email) => {
        try {
            const search = await usersBase.searchByEmail(email)
            return search.length
        } catch (error) {
            console.error(error)
        }
    },

    // Registra um novo usuário
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

    // Realiza o login de um usuário
    loginUser: async (req, res) => {
        const body = req.body
        if(!emailUtils.checkEmail(body.email)) {
            res.send("Email não inválido!")
            return
        }

        if(await userControllers.checkIfUserExists(body.email) == 0) {
            res.send("Usuario não cadastrado!")
            return
        } 

        const user = await usersBase.searchByEmail(body.email)

        if(body.password != user[0].password) {
            res.send("Senha incorreta!")
            return
        }

        const newSection = await loginUtils.generateSectionCode()
        usersBase.updateUserSectionCode(user[0].id, newSection)

        res.send({
            message: "Login realizado com sucesso!",
            status: "success",
            data: {
                newSection: newSection
            }
        })
    }
} 

module.exports = userControllers