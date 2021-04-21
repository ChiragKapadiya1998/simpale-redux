import {createStore, applyMiddleware, compose} from 'redux';

import {mainReducers} from '../Reducer/reducer';
//import ReduxThunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const store = createStore(mainReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
