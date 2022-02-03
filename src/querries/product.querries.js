import axios from "axios";
import {
  setMessage,
  toggleLoading,
  toggleUpdateProductModal,
} from "../redux/reducers/app/app.actions";
import { removeFromCart } from "../redux/reducers/cart/cart.actions";
import {
  addProductAction,
  deleteProductAction,
  selectProductToEdit,
  setAllProducts,
  updateProductAction,
} from "../redux/reducers/product/product.actions";
import { localServerURI } from "../_consts/server/server";

export const fetchAllProducts = async (cart, dispatch) => {
  dispatch(toggleLoading());
  try {
    const response = await axios({
      method: "GET",
      url: `${localServerURI}/api/products/`,
    });
    const {
      data: { products },
    } = response;
    dispatch(setAllProducts(products));
    const findHiddenProductsInCartAndSubstractIt = (
      cart,
      arrayOfHiddenProductsId
    ) => {
      cart.forEach((item) => {
        arrayOfHiddenProductsId.forEach((element) => {
          if (item._id === element) {
            dispatch(
              removeFromCart(
                item._id,
                `le produit ${item.name} à été supprimé du panier car il n'est plus disponible`
              )
            );
          }
        });
      });
    };
    const isThereHiddenProducts = products.some((item) => item.hidden);
    if (isThereHiddenProducts) {
      let filteredProducts = products
        .filter((product) => product.hidden)
        .map((item) => item._id);
      findHiddenProductsInCartAndSubstractIt(cart, filteredProducts);
    }
    dispatch(toggleLoading());
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({
        status: "error",
        message: error.response.data.message,
      })
    );
  }
};

export const addProduct = async (userToken, formData, dispatch) => {
  dispatch(toggleLoading());

  try {
    const response = await axios({
      method: "POST",
      url: `${localServerURI}/api/products/add`,
      data: formData,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + userToken,
      },
    });
    const {
      data: { message, newProduct },
    } = response;
    dispatch(toggleLoading());
    dispatch(addProductAction(newProduct));
    dispatch(
      setMessage({
        status: response.status === 200 ? "success" : "error",
        message,
      })
    );
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({
        status: "error",
        message: error.response.data.message,
      })
    );
  }
};

export const updateProduct = async (userToken, formData, dispatch) => {
  dispatch(toggleLoading());

  try {
    const response = await axios({
      method: "POST",
      url: `${localServerURI}/api/products/update`,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + userToken,
      },
      data: formData,
    });
    const {
      data: { message, updatedProduct },
    } = response;
    dispatch(toggleLoading());
    dispatch(updateProductAction(updatedProduct));
    dispatch(
      setMessage({
        status: response.status === 200 ? "success" : "error",
        message,
      })
    );
    if (response.status === 200) {
      dispatch(selectProductToEdit({}));
      dispatch(toggleUpdateProductModal());
    }
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({
        status: "error",
        message: error.response.data.message,
      })
    );
  }
};

export const deleteProduct = async (userToken, productID, dispatch) => {
  dispatch(toggleLoading());

  try {
    const response = await axios({
      method: "DELETE",
      url: `${localServerURI}/api/products/delete`,
      headers: {
        Authorization: "Bearer " + userToken,
      },
      data: { _id: productID },
    });
    const {
      data: { message },
    } = response;
    dispatch(toggleLoading());
    dispatch(deleteProductAction(productID));
    dispatch(
      setMessage({
        status: response.status === 200 ? "success" : "error",
        message,
      })
    );
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({
        status: "error",
        message: error.response.data.message,
      })
    );
  }
};

export const hideProduct = async (userToken, product, dispatch) => {
  dispatch(toggleLoading());
  let update = { ...product };
  update.hidden = !product.hidden;
  try {
    const response = await axios({
      method: "POST",
      url: `${localServerURI}/api/products/hide`,
      headers: { Authorization: `Bearer ${userToken}` },
      data: { update },
    });
    const {
      data: { message, updatedProduct },
    } = response;
    dispatch(toggleLoading());
    dispatch(updateProductAction(updatedProduct));
    dispatch(
      setMessage({
        status: response.status === 200 ? "success" : "error",
        message,
      })
    );
  } catch (error) {
    dispatch(toggleLoading());
    dispatch(
      setMessage({
        status: "error",
        message: error.response.data.message,
      })
    );
  }
};
