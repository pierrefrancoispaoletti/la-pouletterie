import { appActionTypes } from "./app.types";

const INITIAL_STATE = {
  menuOpen: false,
  isLoading: false,
  message: {
    status: undefined,
    message: "",
  },
  isAddProductModalOpen: false,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appActionTypes.TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    case appActionTypes.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case appActionTypes.SET_MESSAGE:
      return {
        ...state,
        message: { ...action.payload },
      };
    case appActionTypes.TOGGLE_ADD_PRODUCT_MODAL:
      return {
        ...state,
        isAddProductModalOpen: !state.isAddProductModalOpen,
      };
    default:
      return state;
  }
};
