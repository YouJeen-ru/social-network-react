import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props: any) => {

    let postsElements = props.posts.map( (p: any) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)


    let newPostElement: any = React.createRef()

    let addPost = () => {
        debugger
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }


    return (
        <div>
            <div className={s.postBlock}>
                <h3>My post</h3>
                <div>
                    <textarea ref={newPostElement}></textarea>
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