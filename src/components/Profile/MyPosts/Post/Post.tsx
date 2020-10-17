import React from "react";
import s from './Post.module.css'


const Post = (props: any) => {
    return (
            <div className={s.posts}>
                <div className={s.item}>
                    <img src="https://image.freepik.com/free-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-and-glasses-cartoon-character_8169-228.jpg" alt="Logo"/>
                    {props.message}

                    <div>
                        <span>{`Like: ${props.likesCount}`}</span>
                    </div>
                </div>
            </div>


    )
}

export default Post