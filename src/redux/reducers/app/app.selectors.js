import { createSelector } from "reselect";

const selectApp = (state) => state.app;

export const selectOpenMenu = createSelector(
  [selectApp],
  (app) => app.menuOpen
);
