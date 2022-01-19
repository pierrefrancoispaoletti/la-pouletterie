import { faPlus, faReceipt, faUser } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  LinkButtonStyled,
  UserBarContainer,
} from "../UserTopBar/user-top-bar.style";

const AdminTopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <UserBarContainer>
      <LinkButtonStyled onClick={() => console.log("open add product modal")}>
        <FontAwesomeIcon className="icon" icon={faPlus} size="2x" />
        <span>Ajouter un produit</span>
      </LinkButtonStyled>
      <LinkButtonStyled
        selected={location.pathname === "/utilisateurs"}
        onClick={() => navigate("/utilisateurs")}
      >
        <FontAwesomeIcon className="icon" icon={faUser} size="2x" />
        <span>Utilisateurs</span>
      </LinkButtonStyled>
      <LinkButtonStyled
        selected={location.pathname === "/commandes"}
        onClick={() => navigate("/commandes")}
      >
        <FontAwesomeIcon className="icon" icon={faReceipt} size="2x" />
        <span>Commandes</span>
      </LinkButtonStyled>
    </UserBarContainer>
  );
};

export default AdminTopBar;
