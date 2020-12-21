import React from 'react';
import './App.css';
import Header from "./components/Headers/Header";
import Navbar from "./components/Navbar/Navbar";
import {HashRouter as Router, Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Headers/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "./Redux/auth-reducer";
import { compose } from 'redux';
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader";


class App extends React.Component<any> {

    componentDidMount() {
        this.props.initializeApp()

    }


    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Router>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path={'/dialogs'} render={() =>
                            // @ts-ignore
                            <DialogsContainer
                                store={this.props.store}
                            />}/>
                        <Route path={'/profile/:userId?'} render={() =>
                            // @ts-ignore
                            <ProfileContainer store={this.props.store}/>}
                        />
                        <Route path={'/users'} render={() =>
                            // @ts-ignore
                            <UsersContainer/>}
                        />
                        <Route path={'/login'} render={() =>
                            <LoginPage/>}
                        />

                    </div>
                </div>
            </Router>

        );
    }
}

const mapStateToProps = (state: any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    initialized: state.app.initialized
}

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
