import { cartActionTypes } from "./cart.types";

export const addToCart = (product) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: product,
});

export const substractFromCart = (_id) => ({
  type: cartActionTypes.SUBSTRACT_FROM_CART,
  payload: _id,
});

export const removeFromCart = (_id, message = "") => ({
  type: cartActionTypes.REMOVE_FROM_CART,
  payload: _id,
  message: message,
});

export const emptyCart = () => ({
  type: cartActionTypes.EMPTY_CART,
});
