// with the implementation of react-router we dont really need an app.js because theres no central single component. Instead we will render all here
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// BrowserRouter interacts with the history library and decides what to do based on the change to the url
// Route is the workhorse for all things in react-router
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
// importing our components
import PostsIndex from "./components/posts_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

// we apply redux-promise so that it will handle ajax calls between the action and reducer pass
// this is a necesary line for using middleware with react
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
// all routes need two important properties which are path and component
// path is a string for if the user goes to a route, we want to show this component on the screen. 
// We wrap the whole thing in a div because we can only have one child to BrowserRoute
// We need to have switch here that handles paths. Because react will render / if it sees above others it needs to remain at bottom
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
