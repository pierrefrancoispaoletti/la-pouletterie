import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAllProducts } from "../querries/product.querries";

export const useFetchAllProducts = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAllProducts(dispatch);
  }, [dispatch, location]);
};
