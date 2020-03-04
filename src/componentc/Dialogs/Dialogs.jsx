import React from 'react';
import cl from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem.jsx";
import Message from "./Message/Message.jsx";

let messages = [
    {id: 1, message: 'Привет!'},
    {id: 2, message: 'Как дела?'},
    {id: 3, message: 'Хорошая погода.'}
];

let dialogs = [
    {id: 1, name: 'Даша'},
    {id: 2, name: 'Маша'},
    {id: 3, name: 'Алина'},
    {id: 4, name: 'Полина'},
];

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

let messagesElements = messages.map(m => <Message message={m.message}/>)

const Dialogs = (props) => {
    return (
        <div className={cl.common}>
            <div className={cl.dialog}>
                {dialogsElements}
            </div>

            <div className={cl.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;