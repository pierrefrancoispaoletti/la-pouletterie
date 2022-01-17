import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import CustomButton from "../../components/CustoButton/CustomButton";
import TextInput from "../../components/TextInput/TextInput";
import { registerQuerry } from "../../querries/auth.querries";
import { FormContainer, LoginContainer } from "../Login/login.style";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    addressFirstLine: "",
    addressComplement: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerQuerry(newUser, dispatch, navigate);
  };

  return (
    <LoginContainer>
      <CategoryTitle>Inscription</CategoryTitle>
      <FormContainer onSubmit={handleSubmit}>
        <TextInput
          type="text"
          name="firstname"
          label="Prénom"
          value={newUser.firstname}
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="lastname"
          label="Nom"
          value={newUser.lastname}
          handleChange={handleChange}
        />
        <TextInput
          type="email"
          name="email"
          label="Email"
          value={newUser.email}
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="phone"
          label="N° de télephone"
          value={newUser.phone}
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="addressFirstLine"
          label="Adresse ligne 1"
          value={newUser.addressFirstLine}
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="addressComplement"
          label="Adresse (complément)"
          value={newUser.addressComplement}
          handleChange={handleChange}
        />
        <TextInput
          type="password"
          name="password"
          label="Mot de passe"
          value={newUser.password}
          handleChange={handleChange}
        />
        <TextInput
          type="password"
          name="confirmpassword"
          label="Confirmez votre mot de passe"
          value={newUser.confirmpassword}
          handleChange={handleChange}
        />
        <CustomButton type="submit">S'inscrire</CustomButton>
      </FormContainer>
    </LoginContainer>
  );
};

export default Register;
