import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <nav className="navbar bg-dark justify-content-center" style={{backgroundColor:"grey"}}>

            
            <li className="nav-link ">
                <NavLink to="/dashboard" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Companies Hub
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/registeredcompanies" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Registered Companies
                </NavLink>
            </li>
            <li className="nav-link ">
                <NavLink to="/selectedcompanies" className="nav-link" style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Qualified Company
                </NavLink>
            </li>
            <li className="nav-link">
                <NavLink to="/login" className="nav-link" onClick={()=>localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'orange' : 'white' })}>
                    Logout
                </NavLink>
            </li>
           

        </nav>
    )
}

export default Header
