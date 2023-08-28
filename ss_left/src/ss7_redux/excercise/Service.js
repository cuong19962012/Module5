import axios from "axios";
import { GET_ALL_USERS } from "./Types";
import { put, takeEvery, takeLatest } from "redux-saga/effects"
function* getAll(action) {
    try {
        const result = yield axios.get('http://localhost:8000/users');
        yield put({ type: GET_ALL_USERS, payload: result.data });
        console.log(result.data);
    } catch (e) {
        console.log(e);
    }
}
export default function* rootSaga() {
    yield takeEvery(GET_ALL_USERS, getAll);
}