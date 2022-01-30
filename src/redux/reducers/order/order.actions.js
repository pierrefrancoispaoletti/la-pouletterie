import { orderActionTypes } from "./order.types";

export const getOrdersByUserId = (orders) => ({
  type: orderActionTypes.GET_ORDERS_BY_USER_ID,
  payload: orders,
});

export const getAllOrders = (orders) => ({
  type: orderActionTypes.GET_ALL_ORDERS,
  payload: orders,
});
