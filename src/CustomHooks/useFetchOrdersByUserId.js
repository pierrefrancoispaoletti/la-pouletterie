import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByUserId } from "../querries/order.querries";
import {
  selectUserToken,
  selectUserTokenDecoded,
} from "../redux/reducers/user/user.selectors";

export const useFetchUserOrdersByUserid = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserTokenDecoded);
  const token = useSelector(selectUserToken);
  useEffect(() => {
    fetchOrdersByUserId(user.user._id, token, dispatch);
  }, [dispatch, token, user.user._id]);
};
