import styled, { css } from "styled-components";

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
  min-height: ${(props) => (props.isCart ? "0" : "485px")};
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
  justify-content: flex-start;
  flex-grow: 1;
  h3 {
    margin: 0;
    text-align: center;
  }
  span {
    display: inline-block;
    margin-left: auto;
    padding: 18px;
  }
`;

export const ProductItemDescription = styled.div`
  width: 100%;
  margin-left: 18px;
  height: 150px;
  overflow: auto;
`;

export const ProductItemButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
