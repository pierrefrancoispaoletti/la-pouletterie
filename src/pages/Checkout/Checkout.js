import React from "react";

import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/reducers/cart/cart.selectors";

import ProductItem from "../../components/ProductItem/ProductItem";
import CartControlButtons from "../../components/CartControlButtons/CartControlButtons";

import useCreatePaymentIntent from "../../CustomHooks/useCreatePaymentIntent";

import OrderAndPaymentButtons from "../../components/OrderAndPaymentButton/OrderAndPaymentButton";

import {
  CheckoutContainer,
  CheckoutTitle,
  NoItemMessage,
} from "./checkout.style";
import { Link } from "react-router-dom";
import InformativElement from "../../components/InformativeElement/InformativeElement";
import {
  selectAverageTimeBeforeDeliveryInMinutes,
  selectCanDeliver,
} from "../../redux/reducers/app/app.selectors";
import AddressElement from "../../components/AddressElement /AddressElement";
import { useCheckDistanceFromOrigin } from "../../CustomHooks/useCheckDistanceFromOrigin";
import { config } from "../../_consts/config";
import { currentHour } from "../../utils/utils";

const Checkout = () => {
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartItemTotal);
  const canDeliver = useSelector(selectCanDeliver);
  const averageTimeBeforeDeliveryInMinutes = useSelector(
    selectAverageTimeBeforeDeliveryInMinutes
  );
  const {
    minimumOrderAmount,
    additionalMinutesBeforeDelivery,
    deliveryStartTime,
  } = config;
  useCheckDistanceFromOrigin();
  useCreatePaymentIntent();
  return cart.length ? (
    <CheckoutContainer>
      {!canDeliver ||
      total < minimumOrderAmount ||
      currentHour < deliveryStartTime ? (
        <InformativElement>
          {!canDeliver
            ? "Votre Addresse actuelle ne permet pas la livraison"
            : total < minimumOrderAmount
            ? "Le montant de votre commande actuel ne permet pas a livraison"
            : currentHour < deliveryStartTime
            ? `Les livraisons commencent à partir de ${deliveryStartTime}h , mais vous pouvez commander dés maintenant afin d'être livré le plus tôt possible`
            : ""}
        </InformativElement>
      ) : (
        <InformativElement>
          {`Si vous commandez maintenant, votre commande sera chez vous dans ${
            averageTimeBeforeDeliveryInMinutes + additionalMinutesBeforeDelivery
          } minutes`}
        </InformativElement>
      )}
      <AddressElement />
      <CheckoutTitle>
        <h2>Votre Panier</h2>
        <span>
          Total : {total} <small>€</small>
        </span>
      </CheckoutTitle>
      {cart.map(
        (item) =>
          item && (
            <ProductItem key={item._id} {...item} isCart>
              <CartControlButtons _id={item._id} product={item} />
            </ProductItem>
          )
      )}
      <OrderAndPaymentButtons />
    </CheckoutContainer>
  ) : (
    <CheckoutContainer>
      <NoItemMessage>
        Votre Panier est vide actuellement
        <Link to="/">Retour à la boutique</Link>
      </NoItemMessage>
    </CheckoutContainer>
  );
};

export default Checkout;
