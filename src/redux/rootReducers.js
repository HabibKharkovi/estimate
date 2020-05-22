import { combineReducers } from 'redux';
import client from './client/clientReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({ form: formReducer, client })

export default rootReducers;