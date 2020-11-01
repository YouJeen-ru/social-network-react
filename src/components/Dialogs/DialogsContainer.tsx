import React from "react";

import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props: any) => {
    let state = props.store.getState().dialogsPage


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }
    let onNewMessageChange = (body: any) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))

    }

    return (
       <Dialogs
           updateNewMessageBody={onNewMessageChange}
           sendMessage={onSendMessageClick}
           dialogsPage={state}
       />
    )
}


export default DialogsContainer