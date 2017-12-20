import {Map, fromJS} from 'immutable';
import {SET_CONFIGURATION} from "./configurationActions";

const initData = Map({
    loaded: false,
    configuration: null,
});

export default function configurationReducer(state = initData, action) {
    switch (action.type) {
        case SET_CONFIGURATION:
            return Map({
                loaded: true,
                configuration: fromJS(action.data),
            });
        default:
            return state;
    }
}
