// we have many actions for this application
import axios from "axios";
// this fetchs all posts for index
export const FETCH_POSTS = "fetch_posts";
// fetchs single post for show page
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

// root_url for making apis easier to handle
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
// just need unique apikey for submitting, can be whatever you want since no auth
const API_KEY = "?key=PAPERCLIP1234";

export function fetchPosts() {
  // we install axios and redux-promise for handling 
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
