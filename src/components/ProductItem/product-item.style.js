import styled from "styled-components";
import { colors } from "../../_consts/colors/colors";

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
  justify-content: space-between;
  width: 100%;
`;

export const ProductItemTitleAndPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  span {
    display: block;
    margin-left: auto;
    padding: 18px;
    vertical-align: middle;
  }
`;

export const ProductItemDescription = styled.div`
  width: 100%;
  margin-left: 18px;
`;
