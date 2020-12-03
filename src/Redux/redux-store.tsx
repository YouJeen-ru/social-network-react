import { createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import {SidebarReducer} from "./sidebar-reducer";
import UsersReducer from "./users-reducer";
import AuthReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    userPage: UsersReducer,
    auth: AuthReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store