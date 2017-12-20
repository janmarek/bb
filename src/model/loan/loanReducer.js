import {SET_CONFIGURATION} from "../configuration/configurationActions";
import {SET_AMOUNT_VALUE, SET_TERM_VALUE, SET_LOAN} from "./loanActions";
import {getCacheKey} from './loanSelectors';

const initData = {
    amountValue: null,
    termValue: null,
    results: {},
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
            };
        case SET_TERM_VALUE:
            return {
                ...state,
                termValue: action.value,
            };
        case SET_LOAN:
            const cacheKey = getCacheKey(action.amount, action.term);
            return {
                ...state,
                results: {
                    ...state.results,
                    [cacheKey]: action.data,
                },
            };
        default:
            return state;
    }
}

