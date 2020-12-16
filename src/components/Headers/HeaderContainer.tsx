import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {getAuthUserData, logout} from "../../Redux/auth-reducer";




class HeaderContainer extends  React.Component<any, any>{

    componentDidMount() {
        this.props.getAuthUserData()

    }

    render() {
    // @ts-ignore
    return <Header {...this.props}/>
}


}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})



export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)