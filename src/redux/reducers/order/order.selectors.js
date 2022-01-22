import { createSelector } from "reselect";

const selectOrder = (state) => state.order;

export const selectOrdersByUserId = createSelector(
  [selectOrder],
  (order) => order.orders
);
