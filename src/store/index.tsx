import { combineReducers } from "redux";
import { UserState } from "../types/users";
import userReducer from "./reducers/userReducer";

interface AppState{
    user: UserState;
   
}

const rootReducer = combineReducers<AppState>({
    user:userReducer,
    

})

export default rootReducer;