import {authAPI} from "../api/Api";
import {stopSubmit} from "redux-form";


const SET_USER_DATA = 'SET_USER_DATA';



let initialState: any = {
    userId: null,
    email: null,
    login: null,
    isAuth: false


}

const AuthReducer = (state = initialState, action: any) => {


    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,


            }

        default:
            return state
    }


};

export const setAuthUserData = (userId: any, email: any, login: any, isAuth: any) => {
    return {
        type: SET_USER_DATA,
        payload: {userId, email, login, isAuth}
    }
}

//Thunk
export const getAuthUserData = () => {
    return (dispatch: any) => {
        return authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true ))
                }
            })
    }

}
export const login = (email: any, password: any, rememberMe: any) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }

}
export const logout = () => {
    return (dispatch: any) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false ))
                }
            })
    }

}

export default AuthReducer;