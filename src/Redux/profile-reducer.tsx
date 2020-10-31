
import React from "react";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState: any = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'its my first post', likesCount: 23},

    ],
    newPostText: '',

}

const ProfileReducer = (state = initialState, action: any) => {


    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;

        default:
            return state
    }




};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text: any) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default ProfileReducer;