import { appActionTypes } from "./app.types";

const INITIAL_STATE = {
  menuOpen: false,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appActionTypes.TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    default:
      return state;
  }
};
