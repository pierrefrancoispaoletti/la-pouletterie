import { createSelector } from "reselect";
import jwt_decode from "jwt-decode";

const selectUser = (state) => state.user;

export const selectUserToken = createSelector(
  [selectUser],
  (user) => user.token
);

export const selectUserTokenDecoded = createSelector(
  [selectUserToken],
  (token) => {
    if (token) {
      const { password, ...otherProps } = jwt_decode(token);
      return otherProps;
    }
    return;
  }
);
