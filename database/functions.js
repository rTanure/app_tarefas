function addNewUser(name, email, password) {
    database.query(`INSERT INTO users VALUES (null, "${response.name}", "${response.email}", "${response.password}")`, (err, rows)=>{
        if (err) return err
        return "Usuário cadastrado com sucesso!"
    })
}

module.exports = {
    addNewUser
}