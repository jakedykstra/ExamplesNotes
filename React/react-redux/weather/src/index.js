import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// need to import promise
import ReduxPromise from "redux-promise";

import App from "./components/app";
import reducers from "./reducers";

// variable for handling middleware. We drop in our reduxpromise package we installed into the applyMiddleware param
// middleware is now hooked into our application
// this middlware will check each action for whether it has a promise coming through
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.querySelector(".container")
);
