import React from 'react'
import './Logo.css'
import theLogo from '../../assets/img/burger-logo.png'

const Logo = () => {
    return (
        <img className="Logo" alt="Logo" src={theLogo}></img>
    )
}

export default Logo