import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, HomePage } from './routes'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/home' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
