import { GET_ALL_USERS } from "./Types";

const init = {
    users: []
}

const usersReducer = (state = init, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: payload
            }
        default:
            return state;
    }
}
export default usersReducer