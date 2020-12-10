import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)

    }

    render() {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
                )
    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer); // hoc

let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile,
})




let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    getUserProfile
}) (WithUrlDataContainerComponent)