import React from 'react'
import {Route,Routes } from 'react-router-dom'
import { Aboutus } from '../Pages/Aboutus'
import { Contactus } from '../Pages/Contactus'
import { Home } from '../Pages/Home'
import { Login } from '../Pages/Login'
export const Main = () => {
  return (
    <>

     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="contact" element={<Contactus/>} />
       <Route path="about" element={<Aboutus/>}/>
       <Route path="login" element={<Login/>}/>
       
     </Routes>

    </>
  )
}
