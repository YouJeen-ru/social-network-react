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
        },


    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)

    },
    updateNewPostText(newText: any){

        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)

    },
    subscribe(observer:any){
        this._callSubscriber = observer
    }


}


export default store






