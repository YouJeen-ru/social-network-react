import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/State";





const MyPosts = (props: any) => {

    let postsElements = props.posts.map( (p: any) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)


    let newPostElement: any = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))

    }


    return (
        <div>
            <div className={s.postBlock}>
                <h3>My post</h3>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>

                { postsElements }

            </div>

        </div>
    )
}

export default MyPosts