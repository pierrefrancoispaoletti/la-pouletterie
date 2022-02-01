import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserFullAddress } from "../../redux/reducers/user/user.selectors";
import CustomButton from "../CustoButton/CustomButton";

const AddressElement = () => {
  const navigate = useNavigate();
  const userAddress = useSelector(selectUserFullAddress);
  return (
    <div
      style={{
        textAlign: "center",
        border: "6px solid black",
        padding: "0 8px 8px 8px",
        margin: "8px auto",
        width: "100%",
      }}
    >
      <p>Votre adresse : {userAddress}</p>
      <CustomButton
        type="button"
        positive
        onClick={() => navigate("/vos-infos")}
      >
        Modifier mon adresse de livraison
      </CustomButton>
    </div>
  );
};

export default AddressElement;
