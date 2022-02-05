import styled, { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

const mainColor = "black";
const errorColor = colors.red;

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

const isError = (props) => {
  if (props.error) {
    return css`
      border-bottom: 3px solid ${errorColor};
    `;
  }
};

export const GroupContainer = styled.div`
  position: relative;
  margin: auto 0;
  width: 100%;

  input[type="email"] {
    letter-spacing: 0.1em;
  }
  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  width: 100%;
  background: none;
  background-color: transparent;
  color: ${mainColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${mainColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
  ${isError}
`;

export const LabelContainer = styled.label`
  color: ${mainColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: -2px;
  transition: 300ms ease all;
  text-transform: capitalize;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
