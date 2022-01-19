import {
  faEdit,
  faEye,
  faEyeSlash,
  faTrash,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { selectUserTokenDecoded } from "../../redux/reducers/user/user.selectors";
import CustomButton from "../CustoButton/CustomButton";
import { AdminBarContainer } from "./admin-bar.style";

const AdminBar = ({ ...product }) => {
  const user = useSelector(selectUserTokenDecoded);
  return (
    user.user.role === "admin" && (
      <AdminBarContainer>
        <CustomButton positive isSmall style={{ background: "purple" }}>
          <FontAwesomeIcon icon={faEdit} size="1x" />
        </CustomButton>
        <CustomButton positive isSmall style={{ background: "grey" }}>
          <FontAwesomeIcon
            icon={product.hidden ? faEye : faEyeSlash}
            size="1x"
          />
        </CustomButton>
        <CustomButton positive isSmall style={{ background: "red" }}>
          <FontAwesomeIcon icon={faTrash} size="1x" />
        </CustomButton>
      </AdminBarContainer>
    )
  );
};

export default AdminBar;
