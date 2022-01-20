import { productActionTypes } from "./product.types";
import {
  addNewProductHandler,
  deleteProductHandler,
  updateProductHandler,
} from "./product.utils";
const INITIAL_STATE = {
  products: [],
  selectedProduct: {},
  selectedProductToEdit: {},
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
    case productActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: addNewProductHandler(state.products, action.payload),
      };
    case productActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: deleteProductHandler(state.products, action.payload),
      };
    case productActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        products: updateProductHandler(state.products, action.payload),
      };
    case productActionTypes.SELECT_PRODUCT_TO_EDIT:
      return { ...state, selectedProductToEdit: action.payload };
    default:
      return state;
  }
};
