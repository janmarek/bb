import {SET_CONFIGURATION} from "./configurationActions";

const initData = {
    loaded: false,
    configuration: null,
};

export default function configurationReducer(state = initData, action) {
    switch (action.type) {
        case SET_CONFIGURATION:
            return {
                loaded: true,
                configuration: action.data,
            };
        default:
            return state;
    }
}
