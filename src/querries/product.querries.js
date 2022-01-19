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
