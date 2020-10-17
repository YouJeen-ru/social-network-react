import React from "react";
import classes from "./ProfileInfo.module.css"



const ProfileInfo = (props: any) => {
    return (
        <div>

            <div>
                <img src="https://img-dotcom-media.s3.us-east-2.amazonaws.com/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=43"
                     alt="main-picture"/>
            </div>
            <div className={classes.descriptionBlock}> ava + description</div>


        </div>
    )
}

export default ProfileInfo