import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {reduxForm, Field, } from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormControls/FormsControls";


const MyPosts = (props: any) => {

    let postsElements = props.posts.map((p: any) => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)


    let newPostElement: any = React.createRef()

    let onAddPost = (values: any) => {
        props.addPost(values.newPostText)
        // props.dispatch(addPostActionCreator());

    }

    return (
        <>
            <div className={s.postBlock}>
                <h3>My post</h3>

            <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div className={s.posts}>

                    {postsElements}

                </div>
            </div>
        </>
    )
}
let maxLengthCreator10 = maxLengthCreator(10)

let AddNewPostForm = (props: any) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field name='newPostText'
                           component={Textarea}
                           validate={[required, maxLengthCreator10]}
                           placeholder={'Post Message'}
                    />

                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </form>
        </>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts