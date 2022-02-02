import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { selectClientSecret } from "../../redux/reducers/payment/payment.selectors";
import { PaymentContainer } from "./payment.style";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import { selectCartItemTotal } from "../../redux/reducers/cart/cart.selectors";
import { STRIPE_PK } from "../../_consts/STRIPE_PK";

const stripePromise = loadStripe(STRIPE_PK);

const Payment = () => {
  const paymentIntentClientSecret = useSelector(selectClientSecret);
  const cartTotal = useSelector(selectCartItemTotal);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret: paymentIntentClientSecret,
    appearance,
  };
  return (
    <PaymentContainer>
      <CategoryTitle>{`Payer : ${cartTotal} €`}</CategoryTitle>
      {paymentIntentClientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </PaymentContainer>
  );
};

export default Payment;
