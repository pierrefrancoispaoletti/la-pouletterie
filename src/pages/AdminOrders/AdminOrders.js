import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder } from "../../querries/order.querries";
import { selectAllOrders } from "../../redux/reducers/order/order.selectors";
import { selectUserToken } from "../../redux/reducers/user/user.selectors";
import CustomButton from "../../components/CustoButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/pro-duotone-svg-icons";
import { UserOrderContainer } from "../UserOrders/user-orders.style";
import { NoItemMessage } from "../Checkout/checkout.style";
import { Link } from "react-router-dom";
import { refundPayment } from "../../querries/payment.querries";
import { useFetchAllOrders } from "../../CustomHooks/useFetchAllOrders";
const AdminOrders = () => {
  const token = useSelector(selectUserToken);
  const dispatch = useDispatch();
  const allOrders = useSelector(selectAllOrders);

  useFetchAllOrders();

  const handleOrderStatus = (order) => {
    const update = { ...order };

    if (order.status === "PAYEE") {
      update.status = "LIVREE";
    }
    if (order.status === "ATTENTE_PAIEMENT") {
      update.status = "LIVREE";
    }
    if (
      order.status === "ATTENTE_PAIEMENT" &&
      order.deliveryMode === "EMPORTER"
    ) {
      update.status = "RECUPEREE";
    }

    updateOrder(token, update, dispatch);
  };

  const handleRefundPayment = (orderId, paymentIntent) => {
    refundPayment(token, orderId, paymentIntent, dispatch);
  };

  return allOrders.length ? (
    <div style={{ width: "100%" }}>
      <table style={{ textAlign: "center", width: "100%" }}>
        <thead>
          <tr>
            <th>Client</th>
            <th>Date</th>
            <th>Telephone</th>
            <th>Mail</th>
            <th>Status</th>
            <th>Mode</th>
            <th>Adresse</th>
            <th>Commande</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allOrders &&
            allOrders.map((order) => (
              <tr>
                <td>
                  {order.user.firstname} {order.user.lastname}
                </td>
                <td>{order.date}</td>
                <td>
                  <a href={`tel:${order.user.phone}`}>
                    <FontAwesomeIcon icon={faPhone} />
                  </a>
                </td>
                <td>
                  <a href={`mailto:${order.user.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </td>
                <td>{order.status}</td>
                <td>{order.deliveryMode}</td>
                <td>{order.deliveryAddress}</td>
                <td>
                  <ul style={{ listStyle: "none" }}>
                    {order.products.map(({ _id, quantity }) => (
                      <li>
                        {_id.name} x {quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  {order.deliveryMode !== "EMPORTER" && (
                    <CustomButton
                      type="button"
                      onClick={() => handleOrderStatus(order)}
                    >
                      Livrée / Payée
                    </CustomButton>
                  )}
                  {order.deliveryMode === "EMPORTER" && (
                    <CustomButton
                      type="button"
                      onClick={() => handleOrderStatus(order)}
                    >
                      Commande Récuperée
                    </CustomButton>
                  )}
                  {order.paymentIntent && (
                    <CustomButton
                      type="button"
                      negative
                      onClick={() =>
                        handleRefundPayment(order._id, order.paymentIntent)
                      }
                    >
                      Rembourser la commande
                    </CustomButton>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  ) : (
    <UserOrderContainer>
      <NoItemMessage>
        Vous n'avez pas de commandes pour le moment
        <Link to="/">Retour à l'accueil</Link>
      </NoItemMessage>
    </UserOrderContainer>
  );
};

export default AdminOrders;
