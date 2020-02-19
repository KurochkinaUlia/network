import React from 'react';
import logo from '../../img/logo.png';
import cl from './Header.module.css';

const Header = () => {
    return (
        <header className={cl.header}>
            <img className={cl.logo} src={logo} alt={"logo"}/>
        </header>
    )
};


export default Header;