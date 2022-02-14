import { createSelector } from "reselect";

const selectPayment = (state) => state.payment;

export const selectClientSecret = createSelector(
  [selectPayment],
  (payment) => payment.clientSecret
);
