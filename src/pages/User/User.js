import { faDoorOpen, faTrashAlt } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import CustomButton from "../../components/CustoButton/CustomButton";
import TextInput from "../../components/TextInput/TextInput";
import {
  deleteUser,
  updateUser,
  verifyToken,
} from "../../querries/auth.querries";
import { setMessage } from "../../redux/reducers/app/app.actions";
import { emptyCart } from "../../redux/reducers/cart/cart.actions";
import { setClientSecret } from "../../redux/reducers/payment/payment.actions";
import { logout } from "../../redux/reducers/user/user.actions";
import {
  selectUserToken,
  selectUserTokenDecoded,
} from "../../redux/reducers/user/user.selectors";
import { FormContainer, LoginContainer } from "../Login/login.style";

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  addressFirstLine: "",
  addressComplement: "",
  password: "",
};

const User = () => {
  const [updatedUser, setUpdatedUser] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const token = useSelector(selectUserToken);
  const { user } = useSelector(selectUserTokenDecoded);

  useEffect(() => {
    setUpdatedUser({
      ...user,
      addressFirstLine: user.address.addressFirstLine,
      addressComplement: user.address.addressComplement,
      password: "",
    });
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validToken = await verifyToken(token, dispatch);
    if (validToken) {
      updateUser(validToken, updatedUser, dispatch);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(emptyCart());
    dispatch(setClientSecret(""));
    dispatch(
      setMessage({
        status: "success",
        message: "Déconexion efféctuée avec succés",
      })
    );
  };

  const handleDeleteUser = async () => {
    const validToken = await verifyToken(token, dispatch);
    if (validToken) {
      deleteUser(user._id, validToken, dispatch);
    }
  };
  return (
    <LoginContainer>
      <CategoryTitle>Mes Informations</CategoryTitle>
      <FormContainer onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="firstname"
          label="Prénom"
          value={updatedUser.firstname}
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="lastname"
          label="Nom"
          value={updatedUser.lastname}
          handleChange={handleChange}
        />
        <TextInput
          type="email"
          name="email"
          label="Email"
          value={updatedUser.email}
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="phone"
          label="N° de télephone"
          value={updatedUser.phone}
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="addressFirstLine"
          label="Adresse"
          value={updatedUser.addressFirstLine}
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="addressComplement"
          label="Code Postal"
          value={updatedUser.addressComplement}
          handleChange={handleChange}
        />
        <TextInput
          autocomplete="off"
          type="password"
          name="password"
          label="Mot de passe"
          value={updatedUser.password}
          handleChange={handleChange}
        />
        <CustomButton positive type="submit">
          Modifier mes Infos
        </CustomButton>
      </FormContainer>
      <div>
        <CustomButton negative type="button" onClick={() => handleLogout()}>
          <FontAwesomeIcon icon={faDoorOpen} size="1x" />
          <span> Me deconnecter </span>
        </CustomButton>
        <CustomButton negative type="button" onClick={() => handleDeleteUser()}>
          <FontAwesomeIcon icon={faTrashAlt} size="1x" />
          <span> Supprimer mon compte </span>
        </CustomButton>
      </div>
    </LoginContainer>
  );
};

export default User;
