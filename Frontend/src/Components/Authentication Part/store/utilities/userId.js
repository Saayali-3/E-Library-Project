import axios from "axios";

// Action Types
const FETCH_USER_ID = "FETCH_USER_ID";
const SIGN_OUT_ID="SIGN_OUT";
// Action Creators

const fetchUserId = (userId) => {
  return {
    type: FETCH_USER_ID,
    payload: userId,
  };
};
const signOutId = (user) => {
  return {
    type: SIGN_OUT_ID,
    payload: user,
  };
};
// Thunk Creators
export const fetchUserIdThunk = (id) => (dispatch) => {
    return dispatch(fetchUserId(id));
};
export const signOutIdThunk = () => (dispatch) => {
  let user={};
  return dispatch(signOutId(user));
}
// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_ID:
      return action;
    case SIGN_OUT_ID:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
