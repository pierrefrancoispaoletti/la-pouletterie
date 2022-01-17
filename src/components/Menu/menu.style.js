import styled from "styled-components";
import { css } from "styled-components";
import { colors } from "../../_consts/colors/colors";

const openMenu = (props) => {
  if (props.open) {
    return css`
      opacity: 1;
      transform: translateY(0);
    `;
  }
  if (!props.open) {
    return css`
      opacity: 0;
      transform: translateY(-1500px);
    `;
  }
};

export const NavMenuContainer = styled.nav`
  position: absolute;
  width: 80%;
  z-index: 5;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  background: ${colors.blue};
  transition: all 0.5s ease-in-out;
  border-radius: 8px;
  box-shadow: 0px 6px 21px 6px #5e5e5e;
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
