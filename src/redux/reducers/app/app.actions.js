import { appActionTypes } from "./app.types";

export const toggleMenu = () => ({
  type: appActionTypes.TOGGLE_MENU,
});

export const toggleLoading = () => ({
  type: appActionTypes.TOGGLE_LOADING,
});

export const toggleAddProductModal = () => ({
  type: appActionTypes.TOGGLE_ADD_PRODUCT_MODAL,
});

export const toggleUpdateProductModal = () => ({
  type: appActionTypes.TOGGLE_UPDATE_PRODUCT_MODAL,
});

export const toggleUpdatePasswordModal = () => ({
  type: appActionTypes.TOGGLE_UPDATE_PASSWORD_MODAL,
});

export const setMessage = ({ ...message }) => ({
  type: appActionTypes.SET_MESSAGE,
  payload: { status: message.status, message: message.message },
});

export const changeCanDeliver = (canDeliver) => ({
  type: appActionTypes.CHANGE_CAN_DELIVER,
  payload: canDeliver,
});

export const setAverageTimeBeforeDelivery = (averageTimeInMinutes) => ({
  type: appActionTypes.SET_AVERAGE_TIME_BEFORE_DELIVERY,
  payload: averageTimeInMinutes,
});
