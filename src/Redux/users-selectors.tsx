export const getUsers = (state: any) => {
    return state.userPage.users
}
export const getPageSize = (state: any) => {
    return state.userPage.pageSize
}
export const getTotalUsersCount = (state: any) => {
    return state.userPage.totalUsersCount
}
export const getCurrentPage = (state: any) => {
    return state.userPage.currentPage
}
export const getIsFetching = (state: any) => {
    return state.userPage.isFetching
}
export const getFollowingInProgress = (state: any) => {
    return state.userPage.followingInProgress
}