import React, { useEffect, useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const auth  = localStorage.getItem('userData')
    const data = JSON.parse(auth)
    const logout = () =>{
        localStorage.clear()   
        navigate('/register');
    }
    return (
        <div className='link-container'>
            <img className="logo" src='https://yt3.googleusercontent.com/ytc/AL5GRJWWTjIY5ck502yavPpkWCCrGoPuhaHAhUrMUYVrBg=s900-c-k-c0x00ffffff-no-rj'/>
            {auth ? <ul className='nav-links'>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                {/* <li><Link to='/update'>Update Products</Link></li> */}
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/register' onClick={logout}>Logout ( {data[0].name.substring(0, data[0].name.indexOf(' ') ) } ) </Link></li>
            </ul> : 
            <ul className='nav-links'>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>Signup</Link></li> 
            </ul>
        }


        </div>
    )
}

export default Navbar
