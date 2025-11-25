import React from 'react'
import Home from './pages/home/Home'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <Home />
      <ToastContainer autoClose={1000}/>
    </>
  )
}

export default App