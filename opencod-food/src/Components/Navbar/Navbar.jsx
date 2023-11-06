import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../Search/SearchBar'

import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link to={'/'} className='brand'><h1>OpenCod Food</h1></Link>
                <SearchBar />
                <Link to={'/create'}>Create Recipe</Link>
            </nav>
        </div>
    )
}
