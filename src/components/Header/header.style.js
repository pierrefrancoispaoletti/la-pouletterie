import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../../_consts/colors/colors";

/* export const Colors = {
  blue: "#E0F7F1",
  red: "#F16653",
  gold: "#FEC100",
  green: "#A0C76E",
  grey: "#91908E",
};
*/

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  border-bottom: 2px solid ${colors.gold};
  border-radius: 0 0 50px 50px;
  box-shadow: 0px 10px 16px -5px ${colors.gold};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  & > svg:not(:last-child) {
    margin-right: 12px;
  }
`;

export const IconStyled = styled(FontAwesomeIcon)`
  box-sizing: content-box;
  padding: 6px 10px;
  border: 3px solid ${colors.gold};
  border-radius: 50px;
  background: ${colors.blue};
  transition: all 0.3s ease-in-out;

  :active {
    background: ${colors.grey};
  }
`;
