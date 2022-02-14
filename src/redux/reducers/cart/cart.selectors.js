import { createSelector } from "reselect";
import { getCartItemCount, getCartTotal } from "./cart.utils";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], ({ cart }) => cart);

export const selectCartItemCount = createSelector([selectCartItems], (cart) =>
  getCartItemCount(cart)
);

export const selectCartItemTotal = createSelector([selectCartItems], (cart) =>
  getCartTotal(cart)
);
