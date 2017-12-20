import {Map, Record} from 'immutable';
import {SET_CONFIGURATION} from "../configuration/configurationActions";
import {SET_AMOUNT_VALUE, SET_TERM_VALUE, SET_LOAN} from "./loanActions";
import {getCacheKey} from './loanSelectors';

const LoanResult = Record({
    totalPrincipal: null,
    term: null,
    totalCostOfCredit: null,
    totalRepayableAmount: null,
    monthlyPayment: null,
});

const LoanState = Record({
    amountValue: null,
    termValue: null,
    results: Map(),
});

const initData = new LoanState();

export default function configurationReducer(state = initData, action) {
    switch (action.type) {
        case SET_CONFIGURATION:
            return state.merge({
                amountValue: action.data.amountInterval.defaultValue,
                termValue: action.data.termInterval.defaultValue,
            });
        case SET_AMOUNT_VALUE:
            return state.set('amountValue', action.value);
        case SET_TERM_VALUE:
            return state.set('termValue', action.value);
        case SET_LOAN:
            const cacheKey = getCacheKey(action.amount, action.term);
            return state.setIn(['results', cacheKey], new LoanResult(action.data));
        default:
            return state;
    }
}

