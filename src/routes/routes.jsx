import Home from '@/pages/home/Home'
import React from 'react'
import { Routes , Route } from 'react-router-dom'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
    </Routes>
  )
}

export default MyRoutes