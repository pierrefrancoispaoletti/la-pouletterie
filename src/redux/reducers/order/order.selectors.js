import { createSelector } from "reselect";

const selectOrder = (state) => state.order;

export const selectOrdersByUserId = createSelector(
  [selectOrder],
  (order) => order.userOrders
);

export const selectAllOrders = createSelector(
  [selectOrder],
  (order) => order.allOrders
);

export const selectAllRawOrders = createSelector(
  [selectOrder],
  (order) => order.rawOrders
);
