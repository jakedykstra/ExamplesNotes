// State argument is not application state, only the state this reducer is responsible for
// all reducers get two parameters, the current state and action. 
// Reducers are only ever called when an action occurs
// We set the default to null because state can't be undefined. 
export default function(state = null, action) {
  // if the book is selected as the action, return it's payload which is the book 
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  // here we create our base state, for if we don't care about the action passed in
  return state;
}
