import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, HomePage, OurRoute } from './routes'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/our-routes' element={<OurRoute />} />
      </Routes>
    </>
  )
}

export default App
