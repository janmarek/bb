import {getJson} from "../ajax";
import config from "../../config";
import { loadLoan } from "../loan/loanActions";

export const SET_CONFIGURATION = 'CONFIGURATION/SET_CONFIGURATION';

export function setConfiguration(data) {
    return {
        type: SET_CONFIGURATION,
        data,
    };
}

export function loadConfiguration() {
    return dispatch => {
        getJson(`${config.apiUrl}/constraints`)
            .then(data => {
                dispatch(setConfiguration(data));
                dispatch(loadLoan());
            });
    }
}
