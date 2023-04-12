const checkInput = {
  name: (name) => {
    // Verifica se o nome é nulo
    if(!name) return false

    // Verifica se o tamanho do nome é válido
    if(name.length < 4) return false

    // Retorna que está tudo certo
    return true
  },

  email: (email) => {
    // Verifica se o email é nulo
    if(!email) return false

    // Divide o email pelo @
    const emailSplited = email.split("@")

    // Verifica se há apenas um @
    if(emailSplited.length != 2) return false

    // Verifica se o dominio e o usuario do email não são nulos
    if(emailSplited[0].length == 0 || emailSplited[1].length == 0) return false

    // Divide o dominio do email em .
    const domainSplited = emailSplited[1].split(".")

    // Verifica se o dominio possui mais de um ponto
    if(domainSplited.length < 2) return false

    // Verifica se todas as partes do dominio n~so são nulas
    for(let c = 0; c < domainSplited.length; c++) {
      if(domainSplited[c].length == 0) {
        return false
      }
    }

    // Retorna que está tudo certo
    return true
  },

  password: (password) => {
    // erifica se a senha é nula
    if(!password) return false

    // Verifica se a senha tem o tamanbho minimo
    if(password.length < 8) return false

    // Verifica se a senha não possui espaços
    if(password.indexOf(" ") != -1) return false

    // Retorna que está tudo certo
    return true
  }
}

export default checkInput

