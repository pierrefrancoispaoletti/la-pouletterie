import React from "react";

//redux
import { useDispatch, useSelector } from "react-redux";

//redux actions
import { setMessage, toggleMenu } from "../../redux/reducers/app/app.actions";
import { logout } from "../../redux/reducers/user/user.actions";
import { emptyCart } from "../../redux/reducers/cart/cart.actions";

//selectors
import { selectCartItemCount } from "../../redux/reducers/cart/cart.selectors";
import { selectUserTokenDecoded } from "../../redux/reducers/user/user.selectors";

//router
import { Link } from "react-router-dom";

//Logo
import Logo from "../../assets/images/ok2-removebg-preview.png";

//components
import {
  faBagsShopping,
  faBars,
  faDoorOpen,
  faUser,
} from "@fortawesome/pro-duotone-svg-icons";
import Badge from "../Badge/Badge";

//styles
import { ButtonsContainer, HeaderContainer, IconStyled } from "./header.style";

const Header = () => {
  const dispatch = useDispatch();
  const cartItemCount = useSelector(selectCartItemCount);
  const user = useSelector(selectUserTokenDecoded);
  return (
    <HeaderContainer>
      <div>
        <Link to="/">
          <img src={Logo} alt="logo pouletterie" width="100" height="100" />
        </Link>
      </div>
      <ButtonsContainer>
        {!user ? (
          <Link
            to="/connexion"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <IconStyled icon={faUser} size="2x" />
          </Link>
        ) : (
          <IconStyled
            icon={faDoorOpen}
            size="2x"
            onClick={() => {
              dispatch(logout());
              dispatch(emptyCart());
              dispatch(
                setMessage({
                  status: "success",
                  message: "Déconexion efféctuée avec succés",
                })
              );
            }}
          />
        )}
        <IconStyled
          className="openmenu-button"
          icon={faBars}
          size="2x"
          onClick={() => dispatch(toggleMenu())}
        />
        <div>
          <Link
            to="/panier"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Badge>{cartItemCount}</Badge>
            <IconStyled icon={faBagsShopping} size="2x" />
          </Link>
        </div>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
