import { appActionTypes } from "./app.types";

const INITIAL_STATE = {
  menuOpen: false,
  isLoading: false,
  message: {
    status: undefined,
    message: "",
  },
  isAddProductModalOpen: false,
  isUpdateProductModalOpen: false,
  currentDate: {
    day: new Date().toLocaleDateString("fr-FR", { weekday: "long" }),
  },
  canDeliver: false,
  originAddress: "La Pouletterie, C.Commercial mezzavia, 20090 Ajaccio",
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
    default:
      return state;
  }
};
