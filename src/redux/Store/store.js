import {createStore} from 'redux';
import {mainReducers} from '../Reducer/reducer';

export const   store=createStore(mainReducers);