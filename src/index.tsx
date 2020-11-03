import React from 'react';
import './index.css';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {HashRouter as Router} from "react-router-dom";



    ReactDOM.render(
        <Router>
            <Provider store={store}>
            <App />
            </Provider>
        </Router>,
        document.getElementById('root')
    );







