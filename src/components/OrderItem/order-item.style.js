import styled from "styled-components";

export const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ItemOrderDate = styled.div`
  align-self: flex-start;
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-decoration: underline;
`;

export const DetailsStyled = styled.details`
  display: block;
  align-self: flex-start;
  margin-left: 1em;
`;

export const ItemOrderUl = styled.ul`
  list-style: none;
`;
