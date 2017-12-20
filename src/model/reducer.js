import {combineReducers} from 'redux-immutable';
import {Record} from 'immutable';
import configuration from './configuration/configurationReducer';
import loan from './loan/loanReducer';

const reducers = {
    configuration,
    loan,
};

const initAction = {type: 'REDUCER/INIT'};
const recordDefaults = {};
Object.keys(reducers).forEach(key => {
    recordDefaults[key] = reducers[key](undefined, initAction);
})

export const AppState = Record(recordDefaults);

export default combineReducers(reducers);
