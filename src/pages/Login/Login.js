import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import CustomButton from "../../components/CustoButton/CustomButton";
import TextInput from "../../components/TextInput/TextInput";
import { loginQuerry } from "../../querries/auth.querries";
import { FormContainer, LoginContainer } from "./login.style";

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginQuerry(credentials, dispatch);
  };

  return (
    <LoginContainer>
      <CategoryTitle>Connexion</CategoryTitle>
      <FormContainer onSubmit={handleSubmit}>
        <TextInput
          type="email"
          name="email"
          label="email"
          value={credentials.email}
          handleChange={handleChange}
        />
        <TextInput
          type="password"
          name="password"
          label="password"
          value={credentials.password}
          handleChange={handleChange}
        />
        <CustomButton
          disabled={!credentials.email || !credentials.password}
          type="submit"
        >
          Se connecter
        </CustomButton>
        <Link to="/inscription">Pas encore de compte ? Enregistrez vous !</Link>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
