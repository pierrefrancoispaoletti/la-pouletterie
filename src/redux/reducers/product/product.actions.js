import { productActionTypes } from "./product.types";

export const selectProduct = (product) => ({
  type: productActionTypes.SELECT_PRODUCT,
  payload: product,
});

export const setAllProducts = (products) => ({
  type: productActionTypes.SET_ALL_PRODUCTS,
  payload: products,
});
