import { combineReducers } from "redux";
import { CategoryState } from "../types/category";
import { RecordState } from "../types/record";
import { UserState } from "../types/users";
import categoryReducer from "./reducers/categoryReducer";
import recordReducer from "./reducers/recordReducer";
import userReducer from "./reducers/userReducer";

export interface AppState {
  user: UserState;
  categories: CategoryState;
  record: RecordState;
}

const rootReducer = combineReducers<AppState>({
  user: userReducer,
  categories: categoryReducer,
  record: recordReducer,
});

export default rootReducer;
