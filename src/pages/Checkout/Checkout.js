import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/reducers/cart/cart.selectors";
import ProductItem from "../../components/ProductItem/ProductItem";
import CartControlButtons from "../../components/CartControlButtons/CartControlButtons";
import CustomButton from "../../components/CustoButton/CustomButton";
import {
  CheckoutContainer,
  CheckoutTitle,
  NoItemMessage,
} from "./checkout.style";
import { Link, useNavigate } from "react-router-dom";
import useCreatePaymentIntent from "../../CustomHooks/useCreatePaymentIntent";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import { setMessage } from "../../redux/reducers/app/app.actions";
import {
  selectUserToken,
  selectUserTokenDecoded,
} from "../../redux/reducers/user/user.selectors";
import { createOrder } from "../../querries/order.querries";

const Checkout = () => {
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartItemTotal);
  const user = useSelector(selectUserTokenDecoded);
  const token = useSelector(selectUserToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectTakeAway, setSelectTakeAway] = useState("");
  const [selectPaymentMethod, setSelectPaymentMethod] = useState("");

  const handleTakeAwayMethod = (method) => {
    setSelectTakeAway(method);
    setSelectPaymentMethod("");
    if (method === "delivery" && total < 10) {
      dispatch(
        setMessage({
          status: "error",
          message:
            "Un montant de commande de 10€ est necessaire pour etre livré",
        })
      );
      return;
    }
  };
  const handlePaymentMethod = (method) => {
    setSelectPaymentMethod(method);
  };
  const handleCreateOrderForTakeAwayOrPaymentOnDelivery = () => {
    const order = {
      user: user.user._id,
      products: cart,
      deliveryAddress:
        selectTakeAway === "take-away"
          ? ""
          : `${user.user.address.addressFirstLine} ${user.user.address.addressComplement}`,
      deliveryMode: selectTakeAway === "take-away" ? "EMPORTER" : "LIVRAISON",
      status: "ATTENTE_PAIEMENT",
    };
    createOrder(token, order, dispatch, navigate);
  };
  useCreatePaymentIntent();
  return cart.length ? (
    <CheckoutContainer>
      <CheckoutTitle>
        <h2>Votre Panier</h2>
        <span>
          Total : {total} <small>€</small>
        </span>
      </CheckoutTitle>
      <div>
        ATTENTION : Nous ne proposons la livraison que pour les clients
        utilisant les codes postaux 20090 et 20167
      </div>
      <div>
        <p>Votre adresse de livraison : {user.user.address.addressFirstLine}</p>
        <p>Votre Code Postal : {user.user.address.addressComplement}</p>
        <Link to="/vos-infos">Modifier mon adresse de livraison</Link>
      </div>
      {cart.map(
        (item) =>
          item && (
            <ProductItem {...item} isCart>
              <CartControlButtons _id={item._id} product={item} />
            </ProductItem>
          )
      )}
      <CategoryTitle>Je Choisis mon mode de livraison</CategoryTitle>
      <div>
        <CustomButton
          type="button"
          onClick={() => handleTakeAwayMethod("take-away")}
        >
          A emporter
        </CustomButton>
        <CustomButton
          type="button"
          onClick={() => handleTakeAwayMethod("delivery")}
        >
          Livraison (minimum 10€)
        </CustomButton>
      </div>
      {selectTakeAway && selectTakeAway === "delivery" && total > 10 && (
        <>
          <CategoryTitle>Je Choisis mon mode de Paiement</CategoryTitle>
          <div>
            <CustomButton
              type="button"
              onClick={() => handlePaymentMethod("payment-on-delivery")}
            >
              Paiement Espéces ou Tickets restaurant à la livraison
            </CustomButton>
            <CustomButton
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
          Passer au Paiement CB
        </CustomButton>
      )}
      {(selectPaymentMethod === "payment-on-delivery" ||
        selectTakeAway === "take-away") && (
        <CustomButton
          type="button"
          payment
          onClick={() => handleCreateOrderForTakeAwayOrPaymentOnDelivery()}
        >
          Commander
        </CustomButton>
      )}
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
