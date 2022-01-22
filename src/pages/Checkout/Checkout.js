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
import { Link, useNavigate } from "react-router-dom";
import useCreatePaymentIntent from "../../CustomHooks/useCreatePaymentIntent";

const Checkout = () => {
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartItemTotal);
  useCreatePaymentIntent();
  const navigate = useNavigate();
  return cart.length ? (
    <CheckoutContainer>
      <CheckoutTitle>
        <h2>Votre Panier</h2>
        <span>
          Total : {total} <small>€</small>
        </span>
      </CheckoutTitle>
      {cart.map(
        (item) =>
          item && (
            <ProductItem {...item} isCart>
              <CartControlButtons _id={item._id} product={item} />
            </ProductItem>
          )
      )}
      <div style={{ height: "76px" }} />
      <CustomButton type="button" payment onClick={() => navigate("/paiement")}>
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
