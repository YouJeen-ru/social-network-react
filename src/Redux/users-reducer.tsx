const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState: any = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [],

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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id: any) => id != action.userId)
            }
        }
        default:
            return state
    }


};

export const follow = (userId: any) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollow = (userId: any) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users: any) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage: any) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount: any) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    }
}
export const toggleIsFetching = (isFetching: any) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleIsFollowingProgress = (isFetching: any, userId: any) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    }
}

export default UsersReducer;