import { userActionTypes } from "./user.types";

export const getUserToken = (token) => ({
  type: userActionTypes.GET_USER_TOKEN,
  payload: token,
});

export const logout = () => ({
  type: userActionTypes.LOGOUT,
});
