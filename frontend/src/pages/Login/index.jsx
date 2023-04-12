import { useState } from "react"

import checkInput from '../../utils/checkInput'

import Header from "../../components/Header"

export default function Login() {
  const [formData, setFormData] = new useState({
    email: "",
    password: ""
  })

  async function handleSubmit() {
    event.preventDefault()
    let verification = true

    if(! checkInput.email(formData.email)) {
      console.log("email inválido")
      verification = false
    }

    if(! checkInput.password(formData.password)) {
      console.log("senha inválido")
      verification = false
    }

    // if(verification) {
    //   const { data } = await api.newUser(formData)
    //   if(data.status == "error") {
    //     alert("Erro: " + data.message)
    //   } 

    //   window.location.replace("/login")
    // }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({...formData, [name]: value})
  }

  return (
    <div>
      <Header />

      <section>
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" value={formData.email} onChange={handleChange}/>

          <label htmlFor="password">Senha: </label>
          <input type="text" name="password" id="password" value={formData.password} onChange={handleChange}/>

          <button type="submit">Login</button>
        </form>
      </section>
    </div>
  )
}