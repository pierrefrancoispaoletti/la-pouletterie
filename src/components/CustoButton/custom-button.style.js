import styled, { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

const isSmall = (props) => {
  if (props.small) {
    return css`
      font-size: 0.6em;
      padding: 2px;
      text-align: center;
    `;
  } else {
    return css`
      font-size: 1.2em;
      padding: 8px;
    `;
  }
};

const isDelete = (props) => {
  if (props.delete) {
    return css`
      position: absolute;
      top: 4px;
      right: 29px;
    `;
  }
};
const isBadge = (props) => {
  if (props.badge) {
    return css`
      height: 29px;
      padding: 1px 8px;
      vertical-align: middle;
      text-align: center;
      background: ${({ method }) =>
        method === "add" ? colors.green : colors.red};
      font-weight: bold;
      max-width: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
      .fa-primary {
        color: white;
      }
      .fa-secondary {
        color: white;
      }
      :active {
        background: black;
      }
    `;
  }
};

const isDisabled = (props) => {
  if (props.disabled) {
    return css`
      :disabled {
        background: ${colors.grey};
        color: white;
        border: 1px solid black;
        cursor: not-allowed;
      }
    `;
  }
};

const isPaymentButton = (props) => {
  if (props.payment) {
    return css`
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 58px;
      border: none;
      border-radius: unset;
      text-align: center;
      background: black;
      color: white;
      font-weight: bold;
      border-top: 2px solid white;
      :active {
        color: black;
        background: white;
        border-top: 2px solid black;
      }
    `;
  }
};

const buttonStyle = (props) => {
  if (props.negative) {
    return css`
      background: ${colors.red};
      border: 2px solid red;
      color: white;
      font-weight: bold;
      margin-bottom: 8px;
    `;
  }
  if (props.positive) {
    return css`
      background: ${colors.green};
      border: 2px solid green;
      color: white;
      font-weight: bold;
    `;
  }
};
export const CustommButtonStyled = styled.button`
  outline: none;
  border-radius: 50px;
  background: ${colors.blue};
  color: ${colors.green};
  border: 2px solid ${colors.gold};
  transition: all 0.2s ease-in-out;
  :active {
    background: ${colors.green};
    color: ${colors.blue};
  }
  ${isSmall}
  ${isBadge}
  ${isDelete}
  ${isPaymentButton}
  ${isDisabled}
  ${buttonStyle}
`;
