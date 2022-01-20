import axios from "axios";
import {
  setMessage,
  toggleLoading,
  toggleUpdateProductModal,
} from "../redux/reducers/app/app.actions";
import {
  addProductAction,
  deleteProductAction,
  selectProductToEdit,
  setAllProducts,
  updateProductAction,
} from "../redux/reducers/product/product.actions";
import { localServerURI } from "../_consts/server/server";

export const fetchAllProducts = async (dispatch) => {
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
