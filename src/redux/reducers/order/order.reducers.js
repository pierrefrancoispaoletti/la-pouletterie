import { orderActionTypes } from "./order.types";

const INITIAL_STATE = {
  userOrders: [],
  allOrders: [],
  rawOrders: [],
};

export const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case orderActionTypes.GET_ORDERS_BY_USER_ID:
      return {
        ...state,
        userOrders: action.payload,
      };
    case orderActionTypes.GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      };
    case orderActionTypes.GET_ALL_RAW_ORDERS:
      return {
        ...state,
        rawOrders: action.payload,
      };
    default:
      return state;
  }
};
