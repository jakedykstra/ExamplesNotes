//importing the value of combineReducers from the redux object and saving as combineReducers
import { combineReducers } from "redux";
// importing reducers we created
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

// combineReducers maps out our different reducer states. We are essentailly telling redux how to create our application state
const rootReducer = combineReducers({
  // place our reducers function in here and save them to books and activeBooks
  // any key placed in combineReducers becomes a key on our global state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
