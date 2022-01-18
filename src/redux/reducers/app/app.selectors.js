import { createSelector } from "reselect";

const selectApp = (state) => state.app;

export const selectOpenMenu = createSelector(
  [selectApp],
  (app) => app.menuOpen
);

export const selectMessage = createSelector([selectApp], (app) => app.message);

export const selectLoading = createSelector(
  [selectApp],
  (app) => app.isLoading
);
