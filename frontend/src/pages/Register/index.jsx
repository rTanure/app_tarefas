import { useState } from "react" 
import { redirect } from "react-router-dom"
import Header from "../../components/Header"

import checkInput from '../../utils/checkInput'

import api from "../../services/api"

export default function Register() {
  const [formData, setFormData] = new useState({
    name: "",
    email: "",
    password: ""
  })

  async function handleSubmit() {
    event.preventDefault()
    let verification = true

    if(! checkInput.name(formData.name)) {
      console.log("Nome inválido")
      verification = false
    }

    if(! checkInput.email(formData.email)) {
      console.log("email inválido")
      verification = false
    }

    if(! checkInput.password(formData.password)) {
      console.log("senha inválido")
      verification = false
    }

    if(verification) {
      const { data } = await api.newUser(formData)
      if(data.status == "error") {
        alert("Erro: " + data.message)
      } 

      window.location.replace("/login")
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({...formData, [name]: value})
  }

  return(
    <div>
      <Header/>
      <section>
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange}/>

          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" value={formData.email} onChange={handleChange}/>

          <label htmlFor="password">Senha: </label>
          <input type="text" name="password" id="password" value={formData.password} onChange={handleChange}/>

          <button type="submit">Registrar</button>
        </form>
      </section>
    </div>
  )
}