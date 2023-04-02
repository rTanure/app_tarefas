const generalUtils = require('./generalUtils')
const userBase = require('../models/user')

const loginUtils = {
    generateSectionCode: async ()=>{ // Gera um codigo de seção que não está sendo utilizado
        let sectionCode = generalUtils.randInt(9)

        const atualSectionOwner = await userBase.searchBySection(sectionCode)

        while(atualSectionOwner.length != 0) {
            sectionCode = generalUtils.randInt(9)
            atualSectionOwner = await userBase.searchBySection(sectionCode)
        }
        
        return sectionCode
    }
}

module.exports = loginUtils