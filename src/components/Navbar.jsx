import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='link-container'>
            <ul className='nav-links'>
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Products</Link></li>
                <li><Link to='/update'>Update Products</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/register'>Signup</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
