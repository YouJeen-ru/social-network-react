import { createStore, combineReducers } from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import UsersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    userPage: UsersReducer,
})


let store = createStore(reducers)



export default store