import {
  faEdit,
  faEye,
  faEyeSlash,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { verifyToken } from "../../querries/auth.querries";
import { deleteProduct } from "../../querries/product.querries";
import { toggleUpdateProductModal } from "../../redux/reducers/app/app.actions";
import { selectProductToEdit } from "../../redux/reducers/product/product.actions";
import {
  selectUserToken,
  selectUserTokenDecoded,
} from "../../redux/reducers/user/user.selectors";
import CustomButton from "../CustoButton/CustomButton";
import { AdminBarContainer } from "./admin-bar.style";

const AdminBar = ({ ...product }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserTokenDecoded);
  const userToken = useSelector(selectUserToken);

  const handleDeleteProduct = async () => {
    const validToken = await verifyToken(userToken, dispatch);
    if (validToken) {
      deleteProduct(validToken, product._id, dispatch);
    }
  };
  return (
    user?.user.role === "admin" && (
      <AdminBarContainer>
        <CustomButton
          positive
          isSmall
          style={{ background: "purple" }}
          onClick={() => {
            dispatch(selectProductToEdit(product));
            dispatch(toggleUpdateProductModal());
          }}
        >
          <FontAwesomeIcon icon={faEdit} size="1x" />
        </CustomButton>
        <CustomButton positive isSmall style={{ background: "grey" }}>
          <FontAwesomeIcon
            icon={product.hidden ? faEye : faEyeSlash}
            size="1x"
          />
        </CustomButton>
        <CustomButton
          positive
          isSmall
          style={{ background: "red" }}
          onClick={() => handleDeleteProduct()}
        >
          <FontAwesomeIcon icon={faTrash} size="1x" />
        </CustomButton>
      </AdminBarContainer>
    )
  );
};

export default AdminBar;
