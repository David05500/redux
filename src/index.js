import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
// import the App component
import App from "./App";

// import in Immutable Map and List for our dummy data

import {createStore} from "redux";
import initial from "./data/initial";
import reducer from "./reducer";


const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

                    // const articles = store.getState().get("articles");

// wrap the app in Router
// pass our articles through to App using props
ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root"),
);