const usersBase = require("../models/user")
const tasksBase = require("../models/task")

const taskControllers = {
    addTask: async (req, res) => {
        const body = req.body

        if(!body.title || !body.user_id || !body.section) {
            res.send({
                "message": "Falta de atributos obrigatorios para cadastrar uma tarefa",
                "type": "error"
            })
            return
        }

        const user = await usersBase.searchById(body.user_id)

        if(user.section != body.section || user.section == null) {
            res.send({
                "message": "Erro na autenticação do usuário!",
                "type": "error"
            })
            return
        }

        tasksBase.addTaks(body)

        res.send({
            "message": "Tarefa adicionada com sucesso!",
            "type": "success"
        })
    }
}

module.exports = taskControllers