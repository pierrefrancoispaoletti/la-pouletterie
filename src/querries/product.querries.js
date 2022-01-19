import axios from "axios";
import { setMessage, toggleLoading } from "../redux/reducers/app/app.actions";
import { setAllProducts } from "../redux/reducers/product/product.actions";
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
        status: error,
        message:
          "Il y à eu un problème lors de la recuperation des produits , veuillez recharger la page",
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
    console.log(newProduct);
    dispatch(toggleLoading());
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
        message: "Il y à eu un probléme veuillez reessayer",
      })
    );
  }
};
