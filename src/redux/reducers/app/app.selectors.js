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

export const selectIsAddProductModalOpen = createSelector(
  [selectApp],
  (app) => app.isAddProductModalOpen
);

export const selectIsUpdateProductModalOpen = createSelector(
  [selectApp],
  (app) => app.isUpdateProductModalOpen
);

export const selectCurrentDay = createSelector(
  [selectApp],
  (app) => app.currentDate.day
);

export const selectCanDeliver = createSelector(
  [selectApp],
  (app) => app.canDeliver
);

export const selectOriginAddress = createSelector(
  [selectApp],
  (app) => app.originAddress
);

export const selectAverageTimeBeforeDeliveryInMinutes = createSelector(
  [selectApp],
  (app) => app.averageTimeBeforeDeliveryInMinutes
);
