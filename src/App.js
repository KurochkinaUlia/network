import React from 'react';
import './App.css';
import Header from "./componentc/Header/Header";
import Navbar from "./componentc/Navbar/Navbar";
import Profile from "./componentc/Profile/Profile";
import Dialogs from "./componentc/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./componentc/News/News";
import Music from "./componentc/Music/Music";
import Settings from "./componentc/Settings/Settings";

const App = (props) => {
    console.log ('Пропсы в App');
    console.log (props);

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/' render={ () => <Profile posts={props.posts} /> }/>
                    <Route path='/dialogs/' render={ () => <Dialogs /> }/>
                    <Route path='/news/' component={ () => <News /> }/>
                    <Route path='/music/' component={ () => <Music /> }/>
                    <Route path='/settings/' component={ () => <Settings /> }/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
