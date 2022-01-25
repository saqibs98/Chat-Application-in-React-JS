import axios from "axios";

export const loginCall = async (username:any, dispatch:any) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/login",null, { params: {username}});
    dispatch({ type: "LOGIN_SUCCESS", payload: username });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

