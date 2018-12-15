//file for using react/redux together, lists all states important to application that redux has
import { combineReducers } from "redux";
// renaming formReducer as reducer
// // redux form is a library we use for entering in forms and sending to databases
// the documentation on their website is really good, and I encourage you to check it out. It has examples for all kinds of differernt forms you might want to use. what this library does for us is makes it so we dont have to manually set up a bunch of action creators. It automatically handles any changes
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";

const rootReducer = combineReducers({
  posts: PostsReducer,
  // need to make sure key is form, because all reducers will assume they are being hooked up to the 'form' piece of state
  form: formReducer
});

export default rootReducer;
