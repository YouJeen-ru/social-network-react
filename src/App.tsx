import React from 'react';
import './App.css';
import Header from "./components/Headers/Header";
import Navbar from "./components/Navbar/Navbar";
import {HashRouter as Router, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


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
                        <ProfileContainer store={props.store}/> }
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
