import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"


import NotFound from "./pages/NotFound"

export default function RoutedPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        
        <Route path="/register" element={ <Register/> }/>
        <Route path="/login" element={ <Login/> }/>


        <Route path="/*" element={ <NotFound/> }/>

      </Routes>
    </BrowserRouter>
  )
}