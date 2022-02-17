import React from 'react'
import Logo from '../logo/Logo'
import Toggler from '../toggler/Toggler'
import Search from '../search/Search'

import './Header.css'

const Header = ({sideDrawerIsOpen, togglerClicked}) => {
    return (
        <div className="header">
            <Logo />  
            <Search /> 
            <Toggler toggle={togglerClicked} isOpen={sideDrawerIsOpen}/>         
        </div>
    )
}

export default Header