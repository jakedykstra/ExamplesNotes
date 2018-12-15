import { FETCH_WEATHER } from "../actions/index";
// with reducers the first arg is always state, second is action
// the state is set as an array because we will want to store multiple data sets in here (due to the mutliple weather graphs)
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    // we are returning this in an array and saying take this current city and add in the current states cities
    // remember, we can never manipulate state directly, so something like state.push(action.payload.data) won't work. Instead return a completely new instance of state with a new array. could do concat, but instead lets use ES6 with spread
      return [action.payload.data, ...state];
  }
  return state;
}
