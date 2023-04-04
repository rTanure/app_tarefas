const userBase = require('../models/user')
const taskBase = require('../models/task')

const taskUtils = {
    // Compara se a seção apassada é a mesma salva no banco do id
    checkSectionById: async (section, id) => {
        return new  Promise(async (resolve, reject) => {
            const atualUserSection = (await userBase.searchById(id)).section
            resolve(section === atualUserSection)
        })
    },

    // Compara se o user_id passado é o proprietario da task_id
    compareUserAndTask: (task_id, user_id) => {
        return new Promise(async (resolve) => {
            const taskOwnerId = await taskBase.getUserId(task_id)
            resolve(taskOwnerId === user_id)
        })
    }
}

module.exports = taskUtils