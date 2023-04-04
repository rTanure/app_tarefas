// Funções do banco de dados
const { database } = require("../../config/database")
const usersBase = require("../models/user")

// Funções utilitarias
const emailUtils = require("../utils/emailUtils")
const loginUtils = require('../utils/loginUtils')

const userControllers = {

    // Registra um novo usuário
    registerNewUser: async (req, res) => {
        const body = req.body

        // Verifica se o email é válido
        if(!emailUtils.checkEmail(body.email)) {
            res.send({
                message: "Email inválido",
                status: "error"
            })
            return
        }

        // Armazena a lista de usuários com o email
        const users = await usersBase.searchByEmail(body.email)

        // Verifica se o usuário já existe
        if(users.length > 0) {
            res.send({
                message: "Email já cadastrado",
                status: "error"
            })
            return   
        }

        // Adiciona um novo usuário no banco de dados
        usersBase.add(body.name, body.email, body.password)
        
        // Retorna uma mensagem de sucesso
        res.send({
            message: "Usuario registrado com sucesso!",
            status: "success"
        })
    },


    
    // Realiza o login de um usuário
    loginUser: async (req, res) => {
        const body = req.body

        // Verifica se o email é valido
        if(!emailUtils.checkEmail(body.email)) {
            res.send("Email não inválido!")
            return
        }
        // Armazena os usuarios com o email
        const users = await usersBase.searchByEmail(body.email)

        // Verifica se o usuario está cadastrado
        if(users.length == 0) {
            res.send("Usuario não cadastrado!")
            return
        } 

        // Verifica se as senha coincidem
        if(body.password != users[0].password) {
            res.send("Senha incorreta!")
            return
        }

        // Atualiza o codigo de seção do usuario
        const newSection = await loginUtils.generateSectionCode()
        usersBase.updateUserSectionCode(users[0].id, newSection)

        // Retorna uma mensagem de sucesso
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