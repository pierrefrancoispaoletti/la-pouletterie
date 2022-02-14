import axios from "axios";
import { setMessage, toggleLoading } from "../redux/reducers/app/app.actions";
import { emptyCart } from "../redux/reducers/cart/cart.actions";
import {
  getAllOrders,
  getAllRawOrders,
  getOrdersByUserId,
} from "../redux/reducers/order/order.actions";
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
      setMessage({ status: "error", message: error.response.data.message })
    );
  }
};

export const fetchAllOrders = async (token, dispatch) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${localServerURI}/api/orders/all`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const {
      data: { orders },
    } = response;

    dispatch(getAllOrders(orders));
  } catch (error) {
    dispatch(
      setMessage({ status: "error", message: error.response.data.message })
    );
  }
};

export const fetchAllRawOrders = async (token, dispatch) => {
  dispatch(toggleLoading());
  try {
    const response = await axios({
      method: "GET",
      url: `${localServerURI}/api/orders/all-raw`,
      headers: { Authorization: `Bearer ${token}` },
    });

    const {
      data: { orders },
    } = response;

    dispatch(getAllRawOrders(orders));
    dispatch(toggleLoading());
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({ status: "error", message: error.response.data.message })
    );
  }
};

export const createOrder = async (token, order, dispatch, navigate) => {
  dispatch(toggleLoading());
  const { products, ...others } = order;
  let newOrder = {
    ...others,
    products: products.map(({ _id, quantity, name, price }) => ({
      _id,
      quantity,
      name,
      price,
    })),
  };
  try {
    const response = await axios({
      method: "POST",
      url: `${localServerURI}/api/orders/add`,
      data: { order: newOrder },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const {
      data: { message },
    } = response;
    dispatch(toggleLoading());
    dispatch(setMessage({ status: "success", message: message }));
    dispatch(emptyCart());
    navigate("/vos-commandes");
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({ status: "error", message: error.response.data.message })
    );
  }
};

export const updateOrder = async (token, update, dispatch) => {
  dispatch(toggleLoading());
  try {
    const response = await axios({
      method: "POST",
      url: `${localServerURI}/api/orders/update`,
      data: { update },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const {
      data: { message },
    } = response;
    dispatch(toggleLoading());
    dispatch(setMessage({ status: "success", message: message }));
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({ status: "error", message: error.response.data.message })
    );
  }
};
