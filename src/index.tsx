import React from 'react';
import './index.css';
import state, {subscribe} from "./Redux/State";
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText} from "./Redux/State";


 let rerenderEntireTree = (state: any) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(state)

subscribe(rerenderEntireTree)



