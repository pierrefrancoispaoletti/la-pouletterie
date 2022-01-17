import { productActionTypes } from "./product.types";

export const selectProduct = (product) => ({
  type: productActionTypes.SELECT_PRODUCT,
  payload: product,
});
