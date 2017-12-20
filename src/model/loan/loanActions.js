import {getJson} from "../ajax";
import config from "../../config";
import {selectIsLoanLoaded, selectAmount, selectTerm} from "./loanSelectors";

export const SET_AMOUNT_VALUE = 'LOAN/SET_AMOUNT_VALUE';
export const SET_TERM_VALUE = 'LOAN/SET_TERM_VALUE';
export const SET_LOAN = 'LOAN/SET_LOAN';

export function setAmountValue(value) {
    return {
        type: SET_AMOUNT_VALUE,
        value,
    };
}

export function setTermValue(value) {
    return {
        type: SET_TERM_VALUE,
        value,
    };
}

export function setLoan(amount, term, data) {
    return {
        type: SET_LOAN,
        amount,
        term,
        data,
    };
}

export function loadLoan() {
    return (dispatch, getState) => {
        const state = getState();

        if (selectIsLoanLoaded(state)) {
            return;
        }

        const amount = selectAmount(state);
        const term = selectTerm(state);

        getJson(`${config.apiUrl}/real-first-loan-offer`, {amount, term})
            .then(data => {
                dispatch(setLoan(amount, term, data));
            });
    }
}
