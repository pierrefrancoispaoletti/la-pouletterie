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

export const selectUserFullAddress = createSelector(
  [selectUserTokenDecoded],
  (tokenDecoded) => {
    if (tokenDecoded) {
      const {
        user: {
          address: { addressFirstLine },
        },
      } = tokenDecoded;
      let address = `${addressFirstLine}`;
      return address;
    }
    return;
  }
);

export const selectUserPostalCode = createSelector(
  [selectUserTokenDecoded],
  (tokenDecoded) => {
    if (tokenDecoded) {
      const {
        user: {
          address: { addressComplement },
        },
      } = tokenDecoded;
      let postalCode = addressComplement;
      return postalCode;
    }
    return;
  }
);
