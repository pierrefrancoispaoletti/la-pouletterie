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

export const setMessage = ({ ...message }) => ({
  type: appActionTypes.SET_MESSAGE,
  payload: { status: message.status, message: message.message },
});
