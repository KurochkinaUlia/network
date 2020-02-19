import React from 'react';
import cl from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div ><a className={cl.link} href='/profile'> Profile</a></div>
            <div ><a className={cl.link} href='/dialogs'> Messages </a></div>
            <div ><a className={cl.link} href='/news'> News </a></div>
            <div ><a className={cl.link} href='/music'> Music </a></div>
            <div ><a className={cl.link} href='/settings'> Settings </a></div>
        </nav>
    )
};


export default Navbar;