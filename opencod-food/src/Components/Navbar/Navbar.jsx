import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../Search/SearchBar'
import { useTheme } from '../../hooks/useThem'

import './Navbar.css'

export default function Navbar() {

    const {color,changecolor}=useTheme()
    return (
        <div className='navbar' style={{background:color}}>
            <nav onClick={()=>changecolor('red')}>
                <Link to={'/'} className='brand'><h1>OpenCod Food</h1></Link>
                <SearchBar />
                <Link to={'/create'}>Create Recipe</Link>
            </nav>
        </div>
    )
}
