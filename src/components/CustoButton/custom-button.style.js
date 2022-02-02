import styled, { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

const isPaymentSelection = (props) => {
  if (props.paymentSelection) {
    return css`
      margin-bottom: 12px;
    `;
  }
};

const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};
const isSelected = (props) => {
  if (props.selected) {
    return css`
      background: black;
      color: white;
      border: 3px solid white;
    `;
  }
};
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
      :active {
        background: ${hexToRGB(`${colors.red}`, 0.8)};
        border: 4px solid ${colors.red};
      }
    `;
  }
  if (props.positive) {
    return css`
      background: ${colors.green};
      border: 2px solid green;
      color: white;
      font-weight: bold;
      :active {
        background: ${hexToRGB(`${colors.green}`, 0.8)};
        border: 4px solid ${colors.green};
      }
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
  ${isPaymentSelection}
  ${isSelected}
`;
