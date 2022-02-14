import { appActionTypes } from "./app.types";
import { cartActionTypes } from "../cart/cart.types";

const INITIAL_STATE = {
  menuOpen: false,
  isLoading: false,
  message: {
    status: undefined,
    message: "",
  },
  isAddProductModalOpen: false,
  isUpdateProductModalOpen: false,
  isUpdatePasswordModalOpen: false,
  currentDate: {
    day: new Date().toLocaleDateString("fr-FR", { weekday: "long" }),
  },
  canDeliver: false,
  originAddress: "La Pouletterie, C.Commercial mezzavia, 20090 Ajaccio",
  phone: "0836656565",
  email: "test@test.fr",
  averageTimeBeforeDeliveryInMinutes: 0,
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
    case appActionTypes.TOGGLE_UPDATE_PRODUCT_MODAL:
      return {
        ...state,
        isUpdateProductModalOpen: !state.isUpdateProductModalOpen,
      };
    case appActionTypes.TOGGLE_UPDATE_PASSWORD_MODAL:
      return {
        ...state,
        isUpdatePasswordModalOpen: !state.isUpdatePasswordModalOpen,
      };
    case appActionTypes.CHANGE_CAN_DELIVER:
      return {
        ...state,
        canDeliver: action.payload,
      };
    case appActionTypes.SET_AVERAGE_TIME_BEFORE_DELIVERY:
      return {
        ...state,
        averageTimeBeforeDeliveryInMinutes: action.payload,
      };
    case cartActionTypes.ADD_TO_CART: {
      return {
        ...state,
        message: {
          status: "success",
          message: `Produit ajouté(e) au panier`,
        },
      };
    }
    case cartActionTypes.SUBSTRACT_FROM_CART: {
      return {
        ...state,
        message: {
          status: "error",
          message: `Produit soustrait(e) du panier`,
        },
      };
    }
    case cartActionTypes.REMOVE_FROM_CART: {
      return {
        ...state,
        message: {
          status: "error",
          message: !action.message
            ? `Produit supprimé(e) du panier`
            : action.message,
        },
      };
    }
    default:
      return state;
  }
};
