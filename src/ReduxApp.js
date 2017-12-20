import React from 'react';
import App from './App';
import {Provider} from "react-redux";
import store from "./model/store";

export default function ReduxApp() {
    return <Provider store={store}>
        <App />
    </Provider>;
}
