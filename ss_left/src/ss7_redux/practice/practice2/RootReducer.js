import { combineReducers } from "redux";
import postsReducer from "./Reducer";
const rootReducer = combineReducers({
    posts: postsReducer,
})
export default rootReducer;