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

  const [error, setError] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
    addressFirstLine: false,
    password: false,
    confirmpassword: false,
  });

  const [isError, setIsError] = useState(true);

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
    const { addressComplement, ...otherProps } = newUser;
    e.preventDefault();
    checkError(otherProps);
    if (!isError) {
      registerQuerry(newUser, dispatch, navigate);
    }
  };

  console.log(isError);

  const checkError = (object) => {
    const keys = Object.keys(object);
    keys.map((key) => {
      if (!object[key]) {
        setError((prevState) => ({ ...prevState, [key.toString()]: true }));
      } else {
        setError((prevState) => ({ ...prevState, [key.toString()]: false }));
      }
    });
    const values = Object.values(error);
    if (values.some((val) => val === true)) {
      console.log(error);
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <LoginContainer>
      <CategoryTitle>Inscription</CategoryTitle>
      <FormContainer onSubmit={handleSubmit}>
        <TextInput
          // required
          type="text"
          name="firstname"
          label="Prénom (Obligatoire)"
          error={error.firstname}
          value={newUser.firstname}
          handleChange={handleChange}
        />
        <TextInput
          // required
          type="text"
          name="lastname"
          label="Nom (Obligatoire)"
          error={error.lastname}
          value={newUser.lastname}
          handleChange={handleChange}
        />
        <TextInput
          // required
          type="email"
          name="email"
          label="Email (Obligatoire)"
          error={error.email}
          value={newUser.email}
          handleChange={handleChange}
        />
        <TextInput
          type="text"
          name="phone"
          label="N° de télephone (Obligatoire)"
          error={error.phone}
          value={newUser.phone}
          handleChange={handleChange}
        />
        <TextInput
          // required
          type="text"
          name="addressFirstLine"
          label="Adresse (Obligatoire)"
          error={error.addressFirstLine}
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
          // required
          type="password"
          name="password"
          label="Mot de passe (Obligatoire)"
          error={error.password}
          value={newUser.password}
          handleChange={handleChange}
        />
        <TextInput
          // required
          type="password"
          name="confirmpassword"
          label="Confirmation du MDP (Obligatoire)"
          error={error.confirmpassword}
          value={newUser.confirmpassword}
          handleChange={handleChange}
        />
        <CustomButton type="submit">S'inscrire</CustomButton>
      </FormContainer>
    </LoginContainer>
  );
};

export default Register;
