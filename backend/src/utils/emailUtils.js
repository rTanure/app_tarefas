const emailUtils = {
    checkEmail: (email)=>{
        const emailSplited = email.split("@")
        const domainSplited = emailSplited[1].split(".")

        if(emailSplited.length != 2) return false

        if(emailSplited[0].length == 0 || emailSplited[1].length == 0 || domainSplited.length == 1) return false



        for(c = 0; c < domainSplited.length; c++) {
            if(domainSplited[c].length == 0) {
                return false
            }
        }

        return true
    }
}

module.exports = emailUtils