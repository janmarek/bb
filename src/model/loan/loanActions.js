import {getJson} from "../ajax";
import config from "../../config";

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

export function loadLoan() {
    return (dispatch, getState) => {
        const state = getState();

        const query = {
            amount: state.loan.amountValue,
            term: state.loan.termValue,
        }

        getJson(`${config.apiUrl}/real-first-loan-offer`, query)
            .then(data => {
                dispatch({
                    type: SET_LOAN,
                    data,
                })
            });
    }
}
