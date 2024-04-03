import { authenticateActions } from "../Slices/authenticateSlice";

function login(id, password) {
  return (dispatch, getState) => {
    // console.log("login succes reducer");
    // dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    dispatch(authenticateActions.login({ id, password }));
  };
}

export const authenticateAction = { login };
