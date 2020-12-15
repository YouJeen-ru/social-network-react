import React from "react";


const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState: any = {
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Wow'},
        {id: 5, message: 'Nice'},

    ],
    dialogsData: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Yuri'},
        {id: 5, name: 'Victor'},
    ]
}

const DialogsReducer = (state = initialState, action: any) => {


    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return  {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            }

        default:
            return state
    }


};

export const sendMessageCreator = (newMessageBody: any) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}


export default DialogsReducer;