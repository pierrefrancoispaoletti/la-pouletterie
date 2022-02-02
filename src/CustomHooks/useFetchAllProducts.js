import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAllProducts } from "../querries/product.querries";
import { selectCartItems } from "../redux/reducers/cart/cart.selectors";

export const useFetchAllProducts = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  useEffect(() => {
    fetchAllProducts(cart, dispatch);
  }, [dispatch, location]);
};
