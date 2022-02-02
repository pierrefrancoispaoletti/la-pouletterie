import styled, { css } from "styled-components";
import Autocomplete from "react-google-autocomplete";

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;
export const AddressInputContainer = styled(Autocomplete)`
  width: 100%;
  background: none;
  background-color: transparent;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;
