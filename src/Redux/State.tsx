const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store: any = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'its my first post', likesCount: 23},

            ],
            newPostText: '',

        },
        dialogsPage: {
            messagesData:  [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Wow'},
                {id: 5, message: 'Nice'},

            ],
            dialogsData:  [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Sveta'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Yuri'},
                {id: 5, name: 'Victor'},
            ],
            newMessageBody: '' ,
        },


    },
    getState() {
        return this._state
    },
    subscribe(observer:any){
        this._callSubscriber = observer
    },
    _callSubscriber() {
        console.log('state changed')
    },


    dispatch(action: any) {
        if (action.type === ADD_POST) {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messagesData.push({id: 6, message: body})
            this._callSubscriber(this._state)
        }

    }


}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text: any) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body: any) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}



export default store






