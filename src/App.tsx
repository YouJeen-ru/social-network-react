import React from 'react';
import './App.css';
import Header from "./components/Headers/Header";
import Navbar from "./components/Navbar/Navbar";
import {HashRouter as Router, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Headers/HeaderContainer";
import LoginPage from "./components/Login/Login";


function App(props: any) {






    return (
        <Router>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route  path={'/dialogs'} render={ () =>
                        // @ts-ignore
                        <DialogsContainer
                           store={props.store}
                        /> }/>
                    <Route path={'/profile/:userId?'} render={ () =>
                        // @ts-ignore
                        <ProfileContainer store={props.store}/> }
                    />
                    <Route path={'/users'} render={ () =>
                        // @ts-ignore
                        <UsersContainer/> }
                    />
                    <Route path={'/login'} render={() =>
                        <LoginPage/>}
                    />

                </div>
            </div>
        </Router>

    );
}

export default App;
