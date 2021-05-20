import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { profileReducer } from "./profileReducer";


export const rootReducer = combineReducers({
    postReducer,
    profileReducer,
});
