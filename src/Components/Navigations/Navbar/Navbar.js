import React from 'react'
import './Navbar.css'
import Navitems from './NavItems/NavItems'
import Logo from '../../Logo/Logo'

const Navbar = (props) => {
    return (
        <header className="NavBar">
            <Logo />
            <nav className="NavItems">
                <Navitems />
            </nav>
            <div className="menu" onClick={props.Open}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}

export default Navbar