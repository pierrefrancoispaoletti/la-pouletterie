import { products } from "../../../data/products";
import { productActionTypes } from "./product.types";
const INITIAL_STATE = {
  products: [...products],
  selectedProduct: {},
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionTypes.SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};
