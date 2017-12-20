import {combineReducers} from "redux";
import configuration from './configuration/configurationReducer';
import loan from './loan/loanReducer';

export default combineReducers({
    configuration,
    loan,
});
