import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const auth  = localStorage.getItem('userData')

    const logout = () =>{
        localStorage.clear()   
        navigate('/register');
    }
    return (
        <div className='link-container'>
            <ul className='nav-links'>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                
                {
                auth ? <li><Link to='/register' onClick={logout}>Logout</Link></li> :<li><Link to='/register'>Signup</Link></li> 
                 
                 
                 }
                <li><Link to='/profile'>Profile</Link></li>
                
            </ul>
        </div>
    )
}

export default Navbar
