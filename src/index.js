 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

 let messagesPost = [
     {id: 1, post: 'Привет! Как ты?', likeOk: 16},
     {id: 2, post: 'Привет, у меня все круто!!! Как ты?', likeOk: 20},
 ];

ReactDOM.render(<App posts={messagesPost}  />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
