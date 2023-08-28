import { GET_ALL_USERS } from "./Types";
export function getUsers(users) {
    return {
        type: type.GET_USERS(),
        payload: users
    }
}