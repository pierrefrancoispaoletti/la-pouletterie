import styled, { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

const isVisible = (props) => {
  if (props.visible) {
    return css`
      visibility: visible;
    `;
  }
  return css`
    visibility: hidden;
  `;
};

const getMessageColor = (props) => {
  if (props.status === "success") {
    return css`
      background-color: lightgreen;
    `;
  } else {
    return css`
      background-color: ${colors.red};
      border: 3px solid red;
    `;
  }
};
export const LocalMessageContainer = styled.div`
  z-index: 12;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 15px;
  right: 0;
  left: 0;
  width: 100%;
  visibility: hidden;
  animation: 1s fadeIn;
  ${isVisible}
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const LocalMessageWrapper = styled.div`
  background-color: lightGreen;
  text-align: center;
  font-size: 1em;
  padding: 12px;
  border-radius: 50px;
  border: 3px solid green;
  color: black;
  text-transform: uppercase;
  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);
  ${getMessageColor}
`;
