import styled, { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

export const isOpen = (props) => {
  if (props.open) {
    return css`
      opacity: 1;
      transform: translateY(0);
    `;
  }
  if (!props.open) {
    return css`
      opacity: 0;
      transform: translateY(100%);
    `;
  }
};
export const ProductDetailContainer = styled.div`
  position: fixed;
  z-index: 2;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${colors.blue};
  color: green;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  border-radius: 50px 50px 0 0;
  border-top: 3px solid ${colors.gold};
  transition: all 0.5s ease-in-out;
  overflow: auto;
  ${isOpen};
`;
