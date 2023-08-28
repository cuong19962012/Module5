import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer'
import mySaga from './mySaga'
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ reducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga);
export default store;