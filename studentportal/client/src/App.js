import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Addcomp from './Addcomp'
import Register from './Register'
import Registeredcompanies from "./Registeredcompanies"
import Indregcomp from './Indregcomp'
import Selectedcomp from './Selectedcomp'

const App = () => {
  
  return (
    <div>
      <BrowserRouter>   
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/addcompany' exact element={<Addcomp />} />
        <Route path='/selectedcompanies' exact element={<Selectedcomp />} />
        <Route path='/registeredcompanies' exact element={<Registeredcompanies />} />
        <Route path='/indprofile/:id/:sid' exact element={<Profile />} />
        <Route path='/indregcompprofile/:id' exact element={<Indregcomp />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
