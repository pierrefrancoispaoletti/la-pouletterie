import axios from "axios";
import { setMessage, toggleLoading } from "../redux/reducers/app/app.actions";
import { getOrdersByUserId } from "../redux/reducers/order/order.actions";
import { localServerURI } from "../_consts/server/server";

export const fetchOrdersByUserId = async (userId, token, dispatch) => {
  dispatch(toggleLoading());
  try {
    const response = await axios({
      method: "GET",
      url: `${localServerURI}/api/orders/${userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const {
      data: { orders, message },
    } = response;
    dispatch(toggleLoading());
    dispatch(getOrdersByUserId(orders));
    dispatch(setMessage({ status: "success", message: message }));
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({ status: "success", message: error.response.data.message })
    );
  }
};
