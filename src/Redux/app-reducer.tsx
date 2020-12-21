import {authAPI} from "../api/Api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';



let initialState: any = {
    initialized: false


}

const appReducer = (state = initialState, action: any) => {


    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }


};

export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,

    }
}

//Thunk
export const initializeApp = () => (dispatch: any) => {

        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
            dispatch(initializedSuccess())

        })

    }




export default appReducer;