import React from 'react';
import './index.css';
import store from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {HashRouter as Router} from "react-router-dom";


 let rerenderEntireTree: any = (state: any) => {

    ReactDOM.render(
        <Router>
            <Provider store={store}>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
        </Router>,
        document.getElementById('root')
    );
}


rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})



