import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
  token: undefined,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.GET_USER_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case userActionTypes.LOGOUT:
      return {
        ...state,
        token: undefined,
      };
    default:
      return state;
  }
};
