import {profileAPI, usersAPI} from "../api/Api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState: any = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'its my first post', likesCount: 23},

    ],
    profile: null,
    status: ''

}

const ProfileReducer = (state = initialState, action: any) => {


    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }


};

export const addPostActionCreator = (newPostText: any) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setUserProfile = (profile: any) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatus = (status: any) => {
    return {
        type: SET_STATUS,
        status
    }
}

//Thunk
export const getUserProfile = (userId: any) => {
    return (dispatch: any) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))

            })
    }
}
export const getStatus = (userId: any) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))

            })
    }
}
export const updateStatus = (status: any) => {
    return (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))

                }

            })
    }
}




export default ProfileReducer;