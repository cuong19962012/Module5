import { GET_ALL_SUCCESS } from "./Types";
const reducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case GET_ALL_SUCCESS:
            return { ...state, users: action.users };
        default:
            return state;
    }
}
export default reducer;