import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRawOrders } from "../querries/order.querries";
import { selectUserToken } from "../redux/reducers/user/user.selectors";

export const useFetchAllRawOrders = () => {
  const token = useSelector(selectUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllRawOrders(token, dispatch);
  }, [token, dispatch]);
};
