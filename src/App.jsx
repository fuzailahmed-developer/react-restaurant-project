import React from 'react'
import { Button } from './components/ui/button'
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