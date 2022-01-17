import { createSelector } from "reselect";

const selectProduct = (state) => state.product;

export const selectSelectedProduct = createSelector(
  [selectProduct],
  (product) => product.selectedProduct
);

export const selectProducts = createSelector(
  [selectProduct],
  (product) => product.products
);

export const selectCrossedProducts = (products) =>
  createSelector([selectSelectedProduct], ({ crossed }) =>
    crossed?.flatMap((item) =>
      products?.filter((product) => product._id === item)
    )
  );
