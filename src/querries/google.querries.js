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
      url: `${localServerURI}/api/google-api/get-matrix`,
      headers: { "Accept-Language": "fr" },
      data: {
        origin: origin.sansAccent(),
        dest: `${dest.sansAccent()}, ${postalCode}`,
        now,
      },
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
      dispatch(changeCanDeliver(false));
    } else {
      dispatch(changeCanDeliver(true));
      dispatch(
        setAverageTimeBeforeDelivery(
          Math.round(medianDurationValueInSeconds / 60)
        )
      );
    }
  } catch (error) {
    dispatch(changeCanDeliver(false));
    dispatch(
      setMessage({
        status: "error",
        message: "Impossible de calculer le temps de livraison estimé",
      })
    );
  }
};
