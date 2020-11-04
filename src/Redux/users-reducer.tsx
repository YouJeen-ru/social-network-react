const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState: any = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg',
        //     followed: false,
        //     fullName: 'Dmitriy',
        //     status: 'I am boss',
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {id: 2, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed: true, fullName: 'Sasha', status: 'I am boss', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dmitry_Nagiev_2017_3.jpg', followed: false, fullName: 'Andrew', status: 'I am boss', location: {city: 'Kiev', country: 'Ukraine'}},


    ]

}

const UsersReducer = (state = initialState, action: any) => {


    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( (u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}

                    }
                    return u
                })
            }

        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map( (u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}

                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }


};

export const followAC = (userId: any) => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId: any) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsersAC = (users: any) => {
    return {
        type: SET_USERS,
        users
    }
}

export default UsersReducer;