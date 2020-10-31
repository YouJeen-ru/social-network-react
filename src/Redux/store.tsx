import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";





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
        sidebar: {},


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
        this._state.profilePage = ProfileReducer( this._state.profilePage, action)
        this._state.dialogsPage = DialogsReducer( this._state.dialogsPage, action)
        this._state.sidebar = SidebarReducer( this._state.sidebar, action)

        this._callSubscriber(this._state)


    }


}







export default store






