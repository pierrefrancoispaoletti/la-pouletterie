import { cartActionTypes } from "./cart.types";
import {
  addProductToCart,
  deleteProductFromCart,
  substractProductFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  cart: [],
};
export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: addProductToCart(action.payload, [...state.cart]),
      };
    case cartActionTypes.SUBSTRACT_FROM_CART:
      return {
        ...state,
        cart: substractProductFromCart(action.payload, [...state.cart]),
      };
    case cartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: deleteProductFromCart(action.payload, [...state.cart]),
      };
    case cartActionTypes.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
