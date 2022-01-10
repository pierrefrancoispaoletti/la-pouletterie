import styled, { keyframes } from "styled-components";
import { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

const fallMenu = keyframes`
    0% {
        opacity: 0;
        height: 100%;
        visibility: visible;
        background-color: ${colors.blue};
    }
    100% {
        opacity: 1;
        height: 0%;
        visibility: hidden;
        background-color: unset;
    }
`;

const openMenu = (props) => {
  if (props.open) {
    return css`
      opacity: 1;
      animation: ${fallMenu} 0.5s ease-in;
    `;
  }
  if (!props.open) {
    return css`
      opacity: 0;
      animation: ${fallMenu} 0.5s ease-out reverse;
      & a {
        display: none;
      }
    `;
  }
};

export const NavMenuContainer = styled.nav`
  position: absolute;
  width: 80%;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background: ${colors.blue};
  transition: all 0.5s ease-in-out;
  border-radius: 8px;
  ${openMenu}
`;

export const NavMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
  width: 100%;
`;

export const NavMenuLi = styled.li`
  display: inline-block;
  list-style: none;
  margin: auto;
  padding: 15px;
  font-size: 1.2em;
  a {
    text-decoration: none;
    color: ${colors.red};
    transition: all 0.3s ease-in-out;
  }
`;
