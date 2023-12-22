import React from 'react'
import { Routes, Route } from "react-router-dom"
import Nav from '../Component/Nav'
import Home from '../Component/Home'
import Signin from '../Component/Signin'
import Signup from '../Component/Signup'
import Main from '../Component/Content'

const AllRoutes = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/login" element={<Signin/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
    </>
  )
}

export default AllRoutes
