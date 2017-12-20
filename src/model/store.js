import {createStore as reduxCreateStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import {AppState} from './reducer';

export function createStore() {
    return reduxCreateStore(reducer, new AppState(), applyMiddleware(thunk));
}

export default createStore();
