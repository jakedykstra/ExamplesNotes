//In redux we hold all of our application states. When then bring those to react using reducers and actions. Therefore, we will want to make our ajax request through redux using actions.

import axios from "axios";

const API_KEY = "e055f7424f579f901b6d2403ea1ce4bb";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// here we create a variable for FETCH_WEATHER and export it
// the reason we do this is to keep our action types consistent between our actions and reducers. It's better for handling bugs
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // library soely made for making api requests
  const request = axios.get(url);
  //actions always need to have a type
  return {
    type: FETCH_WEATHER,
    // request var holding axios promise is sent in action. Note, by the time it gets to the reducer it will be the data rather than a promise due to redux-promise. RP sees the promise coming in the action, stops the process entirely, then dispatches a new action once the request has finished. It unwraps the promise for us. This is where middleware is great, it can handle this in between handling of actions for us
    payload: request
  };
}
