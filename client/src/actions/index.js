import axios from "axios";

import { FETCH_USER } from "./types";
//normal syntax
// export const fetchUser = () =>
//using thunk alow us to access to the dispatch here
//   function(dispatch) {
//     axios
//       .get("/api/users/current_user")
//       .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
//   };

//refactored syntax
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/users/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
