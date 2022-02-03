import styled, { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

const isCart = (props) => {
  if (props.isCart) {
    return css`
      flex-direction: row;
      div > img {
        width: 80px;
        height: 80px;
        margin-right: 8px;
      }
    `;
  }
};
export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) =>
    props.isCart ? "flex-start" : "space-between"};
  align-items: center;
  width: 100%;
  padding: 12px;
`;

export const ProductItemTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  div > img {
    width: 300px;
    height: 300px;
  }
  ${isCart}
`;

export const ProductItemTitleAndPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) =>
    props.isCart ? "space-between" : "flex-start"};
  flex-grow: 1;
  h3 {
    margin: 0;
    margin-bottom: 22px;
    font-size: 1em;
    text-transform: uppercase;
    text-align: left;
    align-self: flex-start;
  }
  span {
    font-size: 1em;
    font-weight: bold;
    display: inline-block;
    margin-left: 12px;
    align-self: flex-start;
  }
`;

export const ProductItemDescription = styled.div`
  width: fit-content;
  margin-left: auto;
  font-size: 1.3em;
  margin: 12px 0;
  height: auto;
  border: 3px solid ${colors.gold};
  background: ${colors.green};
  color: white;
  font-weight: 700;
  line-height: 1.5;
  padding: 0.5em;
  border-radius: 12px;
`;

export const ProductItemButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ProductImageContainer = styled.div`
  width: fit-content;
  height: fit-content;
  img {
    border-radius: 30px 30px 30px 30px;
  }
`;
