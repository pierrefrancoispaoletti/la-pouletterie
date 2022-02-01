import React from "react";

import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/reducers/cart/cart.selectors";
import { selectUserTokenDecoded } from "../../redux/reducers/user/user.selectors";

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

const Checkout = () => {
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartItemTotal);
  const user = useSelector(selectUserTokenDecoded);

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
        <p>
          Votre adresse de livraison : {user?.user?.address?.addressFirstLine}
        </p>
        <p>Votre Code Postal : {user?.user?.address?.addressComplement}</p>
        <Link to="/vos-infos">Modifier mon adresse de livraison</Link>
      </div>
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
