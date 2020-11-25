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
                ...action.data,
                isAuth: true

            }

        default:
            return state
    }


};

export const setAuthUserData = (userId: any, email: any, login: any) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

export default AuthReducer;