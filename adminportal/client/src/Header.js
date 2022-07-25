import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <nav className="navbar bg-dark justify-content-center" style={{backgroundColor:"grey"}}>

            
            <li className="nav-link ">
                <NavLink to="/dashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    All Companies
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/addcompany" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Add a Company
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/login" className="nav-link" onClick={()=>localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Log Out
                </NavLink>
            </li>
           

        </nav>
    )
}

export default Header
