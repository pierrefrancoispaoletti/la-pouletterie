import {
  faBagsShopping,
  faBars,
  faUser,
} from "@fortawesome/pro-duotone-svg-icons";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/ok2-removebg-preview.png";
import { toggleMenu } from "../../redux/reducers/app/app.actions";
import { ButtonsContainer, HeaderContainer, IconStyled } from "./header.style";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={Logo} alt="logo pouletterie" width="100" height="100" />
        </Link>
      </div>
      <ButtonsContainer>
        <IconStyled icon={faUser} size="2x" />
        <IconStyled
          className="openmenu-button"
          icon={faBars}
          size="2x"
          onClick={() => dispatch(toggleMenu())}
        />
        <IconStyled icon={faBagsShopping} size="2x" />
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
