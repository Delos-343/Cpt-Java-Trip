import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage, HomePage, OurRoute, RouteMap } from './routes'
import { Login } from './components'

function App() {

  const [token, setToken] = useState()

  if(!token) return <Login setToken={setToken} />

  return (
    <>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/our-routes' element={<OurRoute />} />
        <Route exact path='/map' element={<RouteMap />} />
      </Routes>
    </>
  )
}

export default App
