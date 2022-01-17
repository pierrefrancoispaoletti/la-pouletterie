import React from "react";
import { useSelector } from "react-redux";
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
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartItemTotal);
  return cart.length ? (
    <CheckoutContainer>
      <CheckoutTitle>
        <h2>Votre Panier</h2>
        <span>
          Total : {total} <small>€</small>
        </span>
      </CheckoutTitle>
      {cart.map((item) => (
        <ProductItem {...item}>
          <CartControlButtons _id={item._id} product={item} />
        </ProductItem>
      ))}
      <div style={{ height: "76px" }} />
      <CustomButton type="button" payment>
        Passer au Paiement
      </CustomButton>
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
