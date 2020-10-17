import React from "react";
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props: any) => {




    let dialogsElements: any = props.state.dialogsData.map((d: any) => <DialogsItem name={d.name} id={d.id}/>)
    let messageElements: any = props.state.messagesData.map( (m: any) => <Message message={m.message} id={m.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                {messageElements}

            </div>
        </div>
    )
}


export default Dialogs