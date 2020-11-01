import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";





const MyPosts = (props: any) => {

    let postsElements = props.posts.map( (p: any) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)


    let newPostElement: any = React.createRef()

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        // props.dispatch(updateNewPostTextActionCreator(text))

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
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>

                { postsElements }

            </div>

        </div>
    )
}

export default MyPosts