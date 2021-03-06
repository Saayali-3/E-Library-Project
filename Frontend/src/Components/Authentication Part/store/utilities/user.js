import axios from "axios";

// Action Types
const FETCH_USER = "FETCH_USER";
const SIGN_OUT="SIGN_OUT";
// Action Creators

const fetchUser = (user) => {
  return {
    type: FETCH_USER,
    payload: user,
  };
};
const signOut = (user) => {
  return {
    type: SIGN_OUT,
    payload: user,
  };
};
// Thunk Creators
export const fetchUserThunk = (id) => (dispatch) => {
  
  const config={headers: {'Content-Type': 'application/json',"Access-Control-Allow-Origin":"*",
  "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT"}} 
  return axios
    .get(`http://localhost:8080/user/${id}`,{params:{id}},config)
    .then((res) => res.data)
    .then((user) => dispatch(fetchUser(user)))
    .catch((err) => console.log(err));
};
export const signOutThunk = () => (dispatch) => {
  let user={};
  return dispatch(signOut(user));
}
// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    case SIGN_OUT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
