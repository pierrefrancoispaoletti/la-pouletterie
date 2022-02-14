import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyToken } from "../querries/auth.querries";
import { getUserToken, logout } from "../redux/reducers/user/user.actions";
import { selectUserToken } from "../redux/reducers/user/user.selectors";

export const useCheckToken = () => {
  let token = useSelector(selectUserToken);
  const dispatch = useDispatch();
  useEffect(() => {
    const func = async () => {
      if (token) {
        let checkedToken = await verifyToken(token, dispatch);
        if (verifyToken) {
          dispatch(getUserToken(checkedToken));
        } else {
          dispatch(logout());
          return;
        }
        return;
      }
    };
    func();
  }, []);
};
