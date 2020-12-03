import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching, toggleIsFollowingProgress, getUsersThunkCreator
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader';
import { usersAPI} from "../../api/Api";

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
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress

    }
}


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
    getUsers: getUsersThunkCreator,
})(UsersContainer);