import axios from "axios";
import {
  changeCanDeliver,
  setAverageTimeBeforeDelivery,
  setMessage,
} from "../redux/reducers/app/app.actions";
import { config } from "../_consts/config";
import { localServerURI } from "../_consts/server/server";

export const getDistanceMatrix = async (origin, dest, postalCode, dispatch) => {
  const now = Date.now() + 1000 * 60 * 10; //  on rajoute 10minutes au pour le temps de preparation de la commande
  const { maximumTimeInSeconds, maximumDistanceInMeters, deliveryPostalCodes } =
    config;
  try {
    const response = await axios({
      method: "post",
      url: `${localServerURI}/api/google-api`,
      headers: { "Accept-Language": "fr" },
      data: { origin: origin.sansAccent(), dest: dest.sansAccent(), now },
    });
    const {
      data: { rows },
    } = response;

    const { distance, duration, duration_in_traffic } = rows[0].elements[0];

    const medianDurationValueInSeconds =
      Math.round(duration.value + duration_in_traffic.value) / 2;

    // si une des conditions ci dessous est true l'app renvois false
    if (
      distance.value > maximumDistanceInMeters ||
      !deliveryPostalCodes.includes(postalCode) ||
      medianDurationValueInSeconds > maximumTimeInSeconds
    ) {
      console.log(false);
      dispatch(changeCanDeliver(false));
    } else {
      console.log(true);
      dispatch(changeCanDeliver(true));
      dispatch(
        setAverageTimeBeforeDelivery(
          Math.round(medianDurationValueInSeconds / 60)
        )
      );
    }
  } catch (error) {
    dispatch(changeCanDeliver(false));
    console.log(error);
    dispatch(
      setMessage({
        status: "error",
        message: "Il y à eu un probléme",
      })
    );
  }
};
