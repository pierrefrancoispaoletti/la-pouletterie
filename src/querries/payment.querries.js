import axios from "axios";
import { setMessage, toggleLoading } from "../redux/reducers/app/app.actions";
import { setClientSecret } from "../redux/reducers/payment/payment.actions";
import { localServerURI } from "../_consts/server/server";

export const createPaymentIntent = async (
  userToken,
  cart,
  dispatch,
  navigate
) => {
  dispatch(toggleLoading());
  try {
    const response = await axios({
      method: "POST",
      url: `${localServerURI}/api/payment/create-payment-intent`,
      headers: { Authorization: `Bearer ${userToken}` },
      data: { items: cart },
    });

    dispatch(toggleLoading());
    const {
      data: { clientSecret },
    } = response;
    dispatch(setClientSecret(clientSecret));
  } catch (error) {
    dispatch(toggleLoading());
    if (error.response.data === "Unauthorized") {
      dispatch(
        setMessage({
          status: "error",
          message: "Vous devez être connécté pour passer une commande",
        })
      );
      navigate("/connexion");
    } else {
      dispatch(
        setMessage({
          status: "error",
          message: error.response.data.message,
        })
      );
    }
  }
};

export const refundPayment = async (
  token,
  orderId,
  paymentIntent,
  dispatch
) => {
  dispatch(toggleLoading());
  try {
    const response = await axios({
      method: "POST",
      url: `${localServerURI}/api/payment/refund-payment`,
      headers: { Authorization: `Bearer ${token}` },
      data: { orderId, paymentIntent },
    });
    const {
      data: { message },
    } = response;
    dispatch(toggleLoading());
    dispatch(setMessage({ status: "success", message }));
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({
        status: "error",
        message: error.response.data.message,
      })
    );
  }
};
