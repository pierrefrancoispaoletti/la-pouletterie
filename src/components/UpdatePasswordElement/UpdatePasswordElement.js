import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePasswod } from "../../querries/auth.querries";
import { toggleUpdatePasswordModal } from "../../redux/reducers/app/app.actions";
import { selectIsUpdatePasswordModalOpen } from "../../redux/reducers/app/app.selectors";
import CustomButton from "../CustoButton/CustomButton";
import TextInput from "../TextInput/TextInput";
import { UpdatePasswordContainer } from "./update-password-element.style";

const UpdatePasswordElement = () => {
  const dispatch = useDispatch();
  const open = useSelector(selectIsUpdatePasswordModalOpen);
  const [updatedPassword, setUpdatedPassword] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUpdatedPassword({ ...updatedPassword, [name]: value });
  };

  const handleSubmitPasswordChange = (e) => {
    e.preventDefault();
    updatePasswod(updatedPassword, dispatch);
  };
  return (
    <UpdatePasswordContainer open={open}>
      <form onSubmit={handleSubmitPasswordChange}>
        <TextInput
          type="email"
          name="email"
          label="Votre Email"
          value={updatedPassword.email}
          handleChange={handleChange}
        />
        <TextInput
          type="password"
          name="newPassword"
          label="Nouveau mot de passe"
          value={updatedPassword.newPassword}
          handleChange={handleChange}
        />
        <TextInput
          type="password"
          name="confirmPassword"
          label="Confirmation du mot de passe"
          value={updatedPassword.confirmPassword}
          handleChange={handleChange}
        />
        <CustomButton type="submit" positive>
          Changer de mot de passe
        </CustomButton>
      </form>
      <CustomButton
        type="button"
        negative
        onClick={() => dispatch(toggleUpdatePasswordModal())}
      >
        Annuler
      </CustomButton>
    </UpdatePasswordContainer>
  );
};

export default UpdatePasswordElement;
