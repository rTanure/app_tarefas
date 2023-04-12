import axios from "axios"

const API_URL = "http://localhost:8080"

const api = {
  newUser: ({name, email, password}) => {
    return new Promise((resolve, reject) => {
      try {
        axios.post(`${API_URL}/user/register`, {
          name: name,
          email: email,
          password: password
        }).then((e)=>{
          resolve(e)
        }).catch((err)=>{
          reject("Erro: " + err)
        })
      } catch (error) {
        console.error(error)
      }
    })
  },

  login: ({email, password}) => {
    
  }
}

export default api