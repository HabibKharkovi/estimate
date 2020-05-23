import { combineReducers } from 'redux';
import client from './client/clientReducer';
import item from './item/itemReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({ form: formReducer, client, item })

export default rootReducers;