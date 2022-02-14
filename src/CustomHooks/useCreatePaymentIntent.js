import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPaymentIntent } from "../querries/payment.querries";
import { selectCartItems } from "../redux/reducers/cart/cart.selectors";
import { selectUserToken } from "../redux/reducers/user/user.selectors";

const useCreatePaymentIntent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const cart = useSelector(selectCartItems);
  useEffect(() => {
    createPaymentIntent(token, cart, dispatch, navigate);
  }, [cart, dispatch, navigate, token]);
};

export default useCreatePaymentIntent;
