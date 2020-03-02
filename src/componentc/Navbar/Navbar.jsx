import React from 'react';
import cl from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div><NavLink className={cl.link} activeClassName={cl.active} to='/profile'>Profile</NavLink></div>
            <div><NavLink className={cl.link} activeClassName={cl.active} to='/dialogs'> Messages </NavLink></div>
            <div><NavLink className={cl.link} activeClassName={cl.active} to='/news'> News </NavLink></div>
            <div><NavLink className={cl.link} activeClassName={cl.active} to='/music'> Music </NavLink></div>
            <div><NavLink className={cl.link} activeClassName={cl.active} to='/settings'> Settings </NavLink></div>
        </nav>
    )
};


export default Navbar;