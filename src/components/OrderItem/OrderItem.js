import React from "react";
import {
  DetailsStyled,
  ItemOrderDate,
  ItemOrderUl,
  OrderItemContainer,
} from "./order-item.style";

const OrderItem = ({ ...order }) => {
  const { date, products, status } = order;
  return (
    <OrderItemContainer>
      <ItemOrderDate>
        {date}
        <div>
          Total :
          {products
            .reduce((acc, amt) => acc + amt.price * amt.quantity, 0)
            .toFixed(2)}
          €
        </div>
      </ItemOrderDate>
      <DetailsStyled>
        <ItemOrderUl>
          <summary>
            <span>status de la commande: {status}</span>
            {products.map(({ _id, name, price, quantity }) => (
              <li>
                <div>
                  {`${name} ${
                    _id === null ? "(indisponible)" : ""
                  } x ${quantity} = ${price * quantity.toFixed(2)} €`}
                </div>
              </li>
            ))}
          </summary>
        </ItemOrderUl>
      </DetailsStyled>
    </OrderItemContainer>
  );
};

export default OrderItem;
