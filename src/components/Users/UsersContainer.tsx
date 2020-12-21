import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress, requestUsers,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.Pagesize)
    }

    onPageChanged = (pageNumber: any) => {
        this.props.getUsers(pageNumber, this.props.Pagesize)
     }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (state: any) => {
//     return {
//         users: state.userPage.users,
//         pageSize: state.userPage.pageSize,
//         totalUsersCount: state.userPage.totalUsersCount,
//         currentPage: state.userPage.currentPage,
//         isFetching: state.userPage.isFetching,
//         followingInProgress: state.userPage.followingInProgress
//
//     }
// }

let mapStateToProps = (state: any) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}




export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers: requestUsers,
}),
    //withAuthRedirect
)(UsersContainer)

