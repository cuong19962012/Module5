import { combineReducers } from "redux";
import usersReducer from "./Reducer";
const rootReducer = combineReducers({
    users: usersReducer
});
export default rootReducer;