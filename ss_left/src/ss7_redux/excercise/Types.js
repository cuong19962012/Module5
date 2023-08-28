
export const GET_ALL_SUCCESS = "GET_ALL_SUCCESS";
export const GET_ALL_FETCH = "GET_ALL_FETCH";
export const DELETE_USER = "DELETE_USER";

export const getUsersFetch = () => ({
    type: GET_ALL_FETCH
})
export const deleteUsers = (id) => ({
    type: DELETE_USER,
    payload: id
})