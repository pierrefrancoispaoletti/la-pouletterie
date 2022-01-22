import { orderActionTypes } from "./order.types";

const INITIAL_STATE = {
  orders: [],
};

export const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case orderActionTypes.GET_ORDERS_BY_USER_ID:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};
