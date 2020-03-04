import React from 'react';
import cl from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink className={cl.link} to={path}> {props.name}
            </NavLink>
        </div>
    )
};

export default DialogItem;