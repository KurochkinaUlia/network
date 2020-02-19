import React from 'react';
import './App.css';
import Header from "./componentc/Header/Header";
import Navbar from "./componentc/Navbar/Navbar";
import Profile from "./componentc/Profile/Profile";
import Dialogs from "./componentc/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
