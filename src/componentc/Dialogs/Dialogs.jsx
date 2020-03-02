import React from 'react';
import cl from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
};

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink className={cl.link} to={path}> {props.name}
            </NavLink>
        </div>
    )
};

let dialogsData = [
    {id: 1, message: 'Привет!'},
    {id: 2, message: 'Как дела?'},
    {id: 3, message: 'Хорошая погода.'}
];

let dialogsName = [
    {id: 1, name: 'Даша'},
    {id: 2, name: 'Маша'},
    {id: 3, name: 'Злата'},
    {id: 4, name: 'Полина'},
];

const Dialogs = (props) => {
    return (
        <div className={cl.common}>
            <div className={cl.dialog}>
                <div>< DialogItem name={dialogsName[0].name} id={dialogsName[0].id}/></div>
                <div>< DialogItem name={dialogsName[1].name} id={dialogsName[1].id}/></div>
                <div>< DialogItem name={dialogsName[2].name} id={dialogsName[2].id}/></div>
                <div>< DialogItem name={dialogsName[3].name} id={dialogsName[3].id}/></div>
            </div>

            <div className={cl.messages}>
                <Message message={dialogsData[0].message}/>
                <Message message={dialogsData[1].message}/>
                <Message message={dialogsData[2].message}/>
            </div>
        </div>
    )
};

export default Dialogs;