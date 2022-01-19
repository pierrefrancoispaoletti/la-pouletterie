import { productActionTypes } from "./product.types";
const INITIAL_STATE = {
  products: [],
  selectedProduct: {},
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionTypes.SET_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    case productActionTypes.SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};
