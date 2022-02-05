import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders } from "../querries/order.querries";
import { selectUserToken } from "../redux/reducers/user/user.selectors";

export const useFetchAllOrders = () => {
  const [mounted, setMounted] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  let interval;
  useEffect(() => {
    setMounted(true);
    if (mounted) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      interval = setInterval(async () => {
        await fetchAllOrders(token, dispatch);
      }, 10000);
      // on fetch les commandes toutes les 10 secondes
    }
    return () => {
      setMounted(false);
      clearInterval(interval);
    };
  }, [token, mounted]);
};
