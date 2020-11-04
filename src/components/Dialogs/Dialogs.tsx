import React from "react";
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props: any) => {
    let state = props.dialogsPage

    let dialogsElements: any = state.dialogsData.map((d: any) => <DialogsItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements: any = state.messagesData.map( (m: any) => <Message message={m.message} id={m.id} key={m.id}/>)
    let newMessageBody: any = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
        // props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
        // props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}

            </div>
            <div className={classes.messages}>

                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Enter your message'

                        />
                    </div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>

            </div>
        </div>
    )
}


export default Dialogs