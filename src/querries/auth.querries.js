import axios from "axios";
import { setMessage, toggleLoading } from "../redux/reducers/app/app.actions";
import { getUserToken } from "../redux/reducers/user/user.actions";
import { localServerURI } from "../_consts/server/server";

export const loginQuerry = async (credentials, dispatch) => {
  dispatch(toggleLoading());
  try {
    const response = await axios({
      method: "POST",
      url: `${localServerURI}/api/user/login`,
      data: { ...credentials },
    });
    const {
      data: { token, message },
    } = response;
    console.log(message);
    dispatch(getUserToken(token));
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
