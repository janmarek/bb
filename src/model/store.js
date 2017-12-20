import {createStore as reduxCreateStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

export function createStore() {
    return reduxCreateStore(reducer, applyMiddleware(thunk));
}

export default createStore();
