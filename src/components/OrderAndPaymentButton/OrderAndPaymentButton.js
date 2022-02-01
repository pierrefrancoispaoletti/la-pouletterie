import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../../redux/reducers/app/app.actions";

import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/reducers/cart/cart.selectors";
import {
  selectUserToken,
  selectUserTokenDecoded,
} from "../../redux/reducers/user/user.selectors";
import { selectCurrentDay } from "../../redux/reducers/app/app.selectors";

import { useNavigate } from "react-router-dom";
import { createOrder } from "../../querries/order.querries";

import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CustomButton from "../CustoButton/CustomButton";
import InformativElement from "../InformativeElement/InformativeElement";

import { config } from "../../_consts/config";

const OrderAndPaymentButtons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectTakeAway, setSelectTakeAway] = useState("");
  const [selectPaymentMethod, setSelectPaymentMethod] = useState("");

  const cart = useSelector(selectCartItems);
  const user = useSelector(selectUserTokenDecoded);
  const token = useSelector(selectUserToken);
  const total = useSelector(selectCartItemTotal);
  const currentDay = useSelector(selectCurrentDay);

  const {
    closingDays,
    minimumOrderAmount,
    maximumOrderHour,
    minimumOrderHour,
  } = config;

  const currentHour = new Date().toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const handleTakeAwayMethod = (method) => {
    setSelectTakeAway(method);
    setSelectPaymentMethod("");
    if (method === "delivery" && total < minimumOrderAmount) {
      dispatch(
        setMessage({
          status: "error",
          message: `Un montant de commande de ${minimumOrderAmount}€ est necessaire pour etre livré`,
        })
      );
      return;
    }
  };
  const handlePaymentMethod = (method) => {
    setSelectPaymentMethod(method);
  };
  const handleCreateOrderForTakeAwayOrPaymentOnDelivery = () => {
    // si l'utilisateur choisit d'utiliser
    //le payment à la livraison ou la vente
    //a emporter on appelle la queerie
    //create order
    const order = {
      user: user?.user?._id,
      products: cart,
      deliveryAddress:
        selectTakeAway === "take-away"
          ? ""
          : `${user?.user?.address?.addressFirstLine} ${user?.user?.address?.addressComplement}`,
      deliveryMode: selectTakeAway === "take-away" ? "EMPORTER" : "LIVRAISON",
      status: "ATTENTE_PAIEMENT",
    };
    createOrder(token, order, dispatch, navigate);
  };
  const checkOrdersOpen = () => {
    if (closingDays.includes(currentDay)) {
      return {
        canOrder: false,
        reason: `La boutique est fermée : ${closingDays.join(", ")}`,
      };
    } else if (currentHour < minimumOrderHour) {
      return {
        canOrder: false,
        reason: `Vous pourrez commander à partir de ${minimumOrderHour.replace(
          ":",
          " H "
        )}`,
      };
    } else if (currentHour > maximumOrderHour) {
      return {
        canOrder: false,
        reason:
          "Les commandes sont terminées pour aujourd'hui, revenez demain !",
      };
    } else {
      return { canOrder: true };
    }
  };
  return checkOrdersOpen().canOrder ? (
    <div>
      <CategoryTitle>Je Choisis mon mode de livraison</CategoryTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CustomButton
          paymentSelection
          positive
          selected={selectTakeAway === "take-away"}
          type="button"
          onClick={() => handleTakeAwayMethod("take-away")}
        >
          A emporter
        </CustomButton>
        <CustomButton
          disabled={total < minimumOrderAmount}
          paymentSelection
          positive
          selected={selectTakeAway === "delivery"}
          type="button"
          onClick={() => handleTakeAwayMethod("delivery")}
        >
          {`Livraison (minimum ${minimumOrderAmount}€)`}
        </CustomButton>
      </div>
      {selectTakeAway &&
        selectTakeAway === "delivery" &&
        total > minimumOrderAmount && (
          <>
            <CategoryTitle>Je Choisis mon mode de Paiement</CategoryTitle>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CustomButton
                paymentSelection
                positive
                selected={selectPaymentMethod === "payment-on-delivery"}
                type="button"
                onClick={() => handlePaymentMethod("payment-on-delivery")}
              >
                Paiement Espéces ou Tickets restaurant à la livraison
              </CustomButton>
              <CustomButton
                paymentSelection
                positive
                selected={selectPaymentMethod === "CB"}
                type="button"
                onClick={() => handlePaymentMethod("CB")}
              >
                Paiment CB en ligne
              </CustomButton>
            </div>
          </>
        )}
      <div style={{ height: "76px" }} />
      {selectPaymentMethod === "CB" && (
        <CustomButton
          type="button"
          payment
          onClick={() => navigate("/paiement")}
        >
          Payer {total} €
        </CustomButton>
      )}
      {(selectPaymentMethod === "payment-on-delivery" ||
        selectTakeAway === "take-away") && (
        <CustomButton
          type="button"
          payment
          onClick={() => handleCreateOrderForTakeAwayOrPaymentOnDelivery()}
        >
          Commander {total} €
        </CustomButton>
      )}
    </div>
  ) : (
    <InformativElement>{checkOrdersOpen().reason}</InformativElement>
  );
};

export default OrderAndPaymentButtons;
