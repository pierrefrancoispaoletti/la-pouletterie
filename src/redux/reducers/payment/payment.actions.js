import { paymentActionTypes } from "./payment.types";

export const setClientSecret = (clientSecret) => ({
  type: paymentActionTypes.SET_CLIENT_SECRET,
  payload: clientSecret,
});
