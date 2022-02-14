import { faReceipt, faUser } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LinkButtonStyled, UserBarContainer } from "./user-top-bar.style";

const UserBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <UserBarContainer>
      <LinkButtonStyled
        selected={location.pathname === "/vos-infos"}
        onClick={() => navigate("/vos-infos")}
      >
        <FontAwesomeIcon className="icon" icon={faUser} size="2x" />
        <span>Infos</span>
      </LinkButtonStyled>
      <LinkButtonStyled
        selected={location.pathname === "/vos-commandes"}
        onClick={() => navigate("/vos-commandes")}
      >
        <FontAwesomeIcon className="icon" icon={faReceipt} size="2x" />
        <span>Commandes</span>
      </LinkButtonStyled>
    </UserBarContainer>
  );
};

export default UserBar;
