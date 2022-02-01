import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDistanceMatrix } from "../querries/google.querries";
import { selectOriginAddress } from "../redux/reducers/app/app.selectors";
import {
  selectUserFullAddress,
  selectUserPostalCode,
} from "../redux/reducers/user/user.selectors";

export const useCheckDistanceFromOrigin = () => {
  const origin = useSelector(selectOriginAddress);
  const dest = useSelector(selectUserFullAddress);
  const postalCode = useSelector(selectUserPostalCode);
  const dispatch = useDispatch();

  // test datas
  // const dest = "Rte du Vazzio, 20090 Ajaccio";
  // const postalCode = "20090";
  useEffect(() => {
    getDistanceMatrix(origin, dest, postalCode, dispatch);
  }, [dest, dispatch, origin, postalCode]);
};
