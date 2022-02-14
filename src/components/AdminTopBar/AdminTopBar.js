import { faPlus, faReceipt, faUser } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toggleAddProductModal } from "../../redux/reducers/app/app.actions";
import { selectIsAddProductModalOpen } from "../../redux/reducers/app/app.selectors";
import {
  LinkButtonStyled,
  UserBarContainer,
} from "../UserTopBar/user-top-bar.style";

const AdminTopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAddProductModalOpen = useSelector(selectIsAddProductModalOpen);

  return (
    <UserBarContainer>
      <LinkButtonStyled
        selected={isAddProductModalOpen}
        onClick={() => dispatch(toggleAddProductModal())}
      >
        <FontAwesomeIcon className="icon" icon={faPlus} size="2x" />
        <span>Ajouter</span>
      </LinkButtonStyled>
      <LinkButtonStyled
        selected={location.pathname === "/rapports"}
        onClick={() => navigate("/rapports")}
      >
        <FontAwesomeIcon className="icon" icon={faUser} size="2x" />
        <span>Rapports</span>
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
