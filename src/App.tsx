import React from 'react';
import './App.css';
import Header from "./components/Headers/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {HashRouter as Router, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';


function App(props: any) {




    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route  path={'/dialogs'} render={ () =>
                        <DialogsContainer
                           store={props.store}
                        /> }/>
                    <Route path={'/profile'} render={ () =>
                        <Profile store={props.store}/> }
                    />
                    <Route path={'/users'} render={ () =>
                        <UsersContainer/> }
                    />

                </div>
            </div>
        </Router>

    );
}

export default App;
