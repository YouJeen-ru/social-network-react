import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";



const ProfileInfo = (props: any) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>

            {/*<div>*/}
            {/*    <img src="https://img-dotcom-media.s3.us-east-2.amazonaws.com/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=43"*/}
            {/*         alt="main-picture"/>*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={'Hello my friends'}/>
            </div>


        </div>
    )
}

export default ProfileInfo