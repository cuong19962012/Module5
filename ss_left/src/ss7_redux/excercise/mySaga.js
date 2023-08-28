import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_FETCH, GET_ALL_SUCCESS, DELETE_USER } from "./Types";
function getUsers() {
    return axios.get('http://localhost:8000/users').then(rep => rep.data);
}

function* workGetUsersFetch() {
    const users = yield call(getUsers)
    yield put({ type: GET_ALL_SUCCESS, users })

}
function* deleteUsers(action) {
    yield axios.delete('http://localhost:8000/users/' + action.payload);
    const users = yield call(getUsers);
    yield put({ type: GET_ALL_SUCCESS, users })
}
function* mySaga() {
    yield takeEvery(GET_ALL_FETCH, workGetUsersFetch);
    yield takeEvery(DELETE_USER, deleteUsers);
}
export default mySaga
