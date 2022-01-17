import styled from "styled-components";

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px;
`;

export const ProductItemTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 100%;
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
`;

export const ProductItemButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
