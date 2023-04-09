const usersBase = require("../models/user")
const tasksBase = require("../models/task")

const taskUtils = require("../utils/taskUtils")

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
    },

    updateTask: async (req, res) => {
        const body = req.body

        if(!body.title || !body.due_date || (body.is_completed != 0 && body.is_completed != 1) || !body.task_id || !body.user_id || !body.section) {
            res.send({
                "message": "Campos obrigatorios não foram preenchidos!",
                "type": "error"
            })
            return
        }

        if(!await taskUtils.checkSectionById(body.section, body.user_id)) {
            res.send({
                "message": "Seção inspirada, faça outro login",
                "status": "error"
            })
            return
        }
        

        if(!await taskUtils.compareUserAndTask(body.task_id, body.user_id)) {
            res.send({
                message: "Você não é o dono dessa tarefa!",
                type: "error"
            })
            return
        }

        tasksBase.updateTask(body)

        res.send({
            "message": "Tarefa atualizada com sucesso!",
            "type": "seccess"
        })
    }
}

module.exports = taskControllers