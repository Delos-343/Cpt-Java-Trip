import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, HomePage, OurRoute, RouteMap } from './routes'
import { Route1, Route2, Route3, Route4, Route5, Route6 } from './routes/our-routes'

function App() {
  return (
    <>
      <Routes>
        <Route exact exact path='/' element={<LoginPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/our-routes' element={<OurRoute />} />
        <Route exact path='/our-routes/1' element={<Route1 />} />
        <Route exact path='/our-routes/2' element={<Route2 />} />
        <Route exact path='/our-routes/3' element={<Route3 />} />
        <Route exact path='/our-routes/4' element={<Route4 />} />
        <Route exact path='/our-routes/5' element={<Route5 />} />
        <Route exact path='/our-routes/6' element={<Route6 />} />
        <Route exact path='/map' element={<RouteMap />} />
      </Routes>
    </>
  )
}

export default App
