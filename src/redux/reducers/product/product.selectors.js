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

//in product details
export const selectCrossedProducts = (products) =>
  createSelector([selectSelectedProduct], ({ crossed }) =>
    crossed?.flatMap((item) =>
      products?.filter((product) => product._id === item)
    )
  );

export const selectProductToEdit = createSelector(
  [selectProduct],
  (product) => product.selectedProductToEdit
);

export const selectCrossedProductsToEdit = createSelector(
  [selectProductToEdit, selectProducts],
  ({ crossed }, products) =>
    crossed?.flatMap((item) => {
      let filteredProducts = products?.filter((product) => {
        if (product._id === item) {
          product.isChecked = true;
          return product;
        }
      });
      return filteredProducts;
    })
);

export const selectIsOpenProductDetails = createSelector(
  [selectProduct],
  (product) => product.isOpenProductDetails
);
