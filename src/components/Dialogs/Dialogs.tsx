import React from "react";
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props: any) => {
    let state = props.dialogsPage

    let dialogsElements: any = state.dialogsData.map((d: any) => <DialogsItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements: any = state.messagesData.map((m: any) => <Message message={m.message} id={m.id} key={m.id}/>)
    let newMessageBody: any = state.newMessageBody

    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)

    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <div>{messageElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

export default Dialogs