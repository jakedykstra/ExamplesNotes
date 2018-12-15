import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions";

// set state as an object to hold data if there isn't data yet
export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      // .omit will look at the state object for the action.payload and then return a new state object without that action payload (which has the data of the post we're deleting)
      return _.omit(state, action.payload);
    case FETCH_POST:
      // with ...state, we are taking all posts we already have and are placing them into this new object, for our second param we grab the post that we care about (post we're pulling up) which can be found in action.payload.data. We also use ES6 to save the data to a key of action.payload.data.id which we grab within this object. We use key interpolation to say whatever the action.payload.data.id is, make a new key with its value, and it's value will be the data. 
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
    // when we get the payload data is is set in an array, we need to somehow turn that into an object where the id is the post key and the value is the post itself { 4: post}, luckily lodash has a method for just that
    //.mapKeys takes the data and pulls the "id" within the data, setting it as the key to the object
      return _.mapKeys(action.payload.data, "id");
    // default for if its none of these cases is just returning state
    default:
      return state;
  }
}
