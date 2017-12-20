import {Record} from 'immutable';
import {SET_CONFIGURATION} from "./configurationActions";

const ValueConfiguration = Record({
    min: null,
    max: null,
    step: null,
    defaultValue: null,
});

const Configuration = Record({
    amountInterval: null,
    termInterval: null,
});

Configuration.fromJS = (data) => {
    return new Configuration({
        amountInterval: new ValueConfiguration(data.amountInterval),
        termInterval: new ValueConfiguration(data.termInterval),
    });
};

const ConfigurationState = Record({
    loaded: false,
    configuration: null,
});

const initData = new ConfigurationState();

export default function configurationReducer(state = initData, action) {
    switch (action.type) {
        case SET_CONFIGURATION:
            return state.merge({
                loaded: true,
                configuration: Configuration.fromJS(action.data),
            });
        default:
            return state;
    }
}
