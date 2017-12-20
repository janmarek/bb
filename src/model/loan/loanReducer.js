import {SET_CONFIGURATION} from "../configuration/configurationActions";
import {SET_AMOUNT_VALUE, SET_TERM_VALUE, SET_LOAN} from "./loanActions";

const initData = {
    amountValue: null,
    termValue: null,
    loan: null,
};

export default function configurationReducer(state = initData, action) {
    switch (action.type) {
        case SET_CONFIGURATION:
            return {
                ...state,
                amountValue: action.data.amountInterval.defaultValue,
                termValue: action.data.termInterval.defaultValue,
            };
        case SET_AMOUNT_VALUE:
            return {
                ...state,
                amountValue: action.value,
                loan: null, // invalidate
            };
        case SET_TERM_VALUE:
            return {
                ...state,
                termValue: action.value,
                loan: null, // invalidate
            };
        case SET_LOAN:
            return {
                ...state,
                loan: action.data,
            };
        default:
            return state;
    }
}

