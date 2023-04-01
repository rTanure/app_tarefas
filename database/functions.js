function addNewUser(name, email, password) {
    database.query(`INSERT INTO users VALUES (null, "${response.name}", "${response.email}", "${response.password}")`, (err, rows)=>{
        if (err) return err
        return "Usuário cadastrado com sucesso!"
    })
}

function checkEmail(email) {
    database.query(`SELECT * FROM users WHERE email = "${content.email}"`, (err, rows) => {
        if(err) throw err
        if (rows.length == 0) {
            return false;
        } else {
            return true;
        }
    })
}

module.exports = {
    addNewUser,
    checkEmail
}