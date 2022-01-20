import { productActionTypes } from "./product.types";

export const selectProduct = (product) => ({
  type: productActionTypes.SELECT_PRODUCT,
  payload: product,
});

export const setAllProducts = (products) => ({
  type: productActionTypes.SET_ALL_PRODUCTS,
  payload: products,
});

export const addProductAction = (product) => ({
  type: productActionTypes.ADD_PRODUCT,
  payload: product,
});

export const updateProductAction = (updatedProduct) => ({
  type: productActionTypes.UPDATE_PRODUCT,
  payload: updatedProduct,
});

export const selectProductToEdit = (product) => ({
  type: productActionTypes.SELECT_PRODUCT_TO_EDIT,
  payload: product,
});

export const deleteProductAction = (productId) => ({
  type: productActionTypes.DELETE_PRODUCT,
  payload: productId,
});
