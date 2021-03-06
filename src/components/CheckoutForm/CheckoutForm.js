import React, { useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import {
  setMessage,
  toggleLoading,
} from "../../redux/reducers/app/app.actions";
import {
  selectLoading,
  selectMessage,
} from "../../redux/reducers/app/app.selectors";
import {
  PaymentElementStyled,
  PaymentForm,
  PaymentMessage,
  Spinner,
  StyledPaymentButton,
} from "./checkout-form.style";
import { selectClientSecret } from "../../redux/reducers/payment/payment.selectors";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../redux/reducers/cart/cart.actions";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const message = useSelector(selectMessage);
  const clientSecret = useSelector(selectClientSecret);
  const navigate = useNavigate();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecret) {
      return;
    }
  }, [clientSecret, stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    dispatch(toggleLoading());
    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (error) {
      dispatch(setMessage({ status: "error", message: error.message }));
      if (error.payment_intent.status === "canceled") {
        dispatch(
          setMessage({
            status: "error",
            message: "Vous avez mis trop de temps pour valider votre commande",
          })
        );
        navigate("/panier");
      }
    } else {
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            dispatch(
              setMessage({ status: "success", message: "Paiement r??ussi" })
            );
            dispatch(emptyCart());
            setTimeout(() => {
              navigate("/vos-commandes");
            }, 3000);
            break;
          case "processing":
            dispatch(
              setMessage({
                setMessage: "success",
                message: "Paiement en cours...",
              })
            );
            break;
          case "requires_payment_method":
            dispatch(
              setMessage({
                status: "error",
                message:
                  "Il y ?? eu un probl??me lors de votre paiement, veuillez r??essayer",
              })
            );
            navigate("/panier");
            break;
          default:
            dispatch(
              setMessage({
                status: "error",
                message: "Il y ?? eu un probl??me, vous n'avez pas ??t?? factur??",
              })
            );
            navigate("/panier");
            break;
        }
      });
    }
    dispatch(toggleLoading());
  };

  return (
    <PaymentForm id="payment-form" onSubmit={handleSubmit}>
      <PaymentElementStyled id="payment-element" />
      <StyledPaymentButton
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? (
            <Spinner className="spinner" id="spinner"></Spinner>
          ) : (
            "Payer"
          )}
        </span>
      </StyledPaymentButton>
      {/* Show any error or success messages */}
      {message.message && (
        <PaymentMessage id="payment-message">{message.message}</PaymentMessage>
      )}
    </PaymentForm>
  );
};

export default CheckoutForm;
