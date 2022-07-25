import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'
import Profile from './Profile'

import Addcomp from './Addcomp'



const App = () => {
  
  return (
    <div>
      <BrowserRouter>

     
       
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/addcompany' exact element={<Addcomp />} />
        <Route path='/indprofile/:id' exact element={<Profile />} />
        
      </Routes>

      
      </BrowserRouter>
    </div>
  )
}

export default App
