import { paymentActionTypes } from "./payment.types";

const INITIAL_STATE = {
  clientSecret: "",
};

export const paymentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case paymentActionTypes.SET_CLIENT_SECRET:
      return {
        ...state,
        clientSecret: action.payload,
      };
    default:
      return state;
  }
};
