import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import ItemOrder from "../../components/OrderItem/OrderItem";
import { useFetchUserOrdersByUserid } from "../../CustomHooks/useFetchOrdersByUserId";
import { selectOrdersByUserId } from "../../redux/reducers/order/order.selectors";
import { NoItemMessage } from "../Checkout/checkout.style";
import { UserOrderContainer } from "./user-orders.style";

const UserOrders = () => {
  useFetchUserOrdersByUserid();
  const orders = useSelector(selectOrdersByUserId);
  return orders.length ? (
    <UserOrderContainer>
      <CategoryTitle>Mes Commandes</CategoryTitle>
      {orders.map(({ user, ...op }) => (
        <ItemOrder key={op._id} {...op} />
      ))}
    </UserOrderContainer>
  ) : (
    <UserOrderContainer>
      <NoItemMessage>
        Vous n'avez pas de commandes pour le moment
        <Link to="/">Retour à la boutique</Link>
      </NoItemMessage>
    </UserOrderContainer>
  );
};

export default UserOrders;
