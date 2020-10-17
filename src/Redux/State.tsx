import {rerenderEntireTree} from "../rerender";


let state: any = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'its my first post', likesCount: 23},

        ],

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


}
export let addPost = (postMessage: any) => {
    debugger
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)

}


export default state






