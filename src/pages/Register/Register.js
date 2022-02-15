import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryTitle from "../../components/CategoryTitle/CategoryTitle";
import CustomButton from "../../components/CustoButton/CustomButton";
import TextInput from "../../components/TextInput/TextInput";
import { registerQuerry } from "../../querries/auth.querries";
import { FormContainer, LoginContainer } from "../Login/login.style";
import TextInputAddress from "../../components/TextInputAddress/TextInputAddress";
import { GOOGLE_API_KEY_FOR_PLACE } from "../../_consts/GOOGLE_API_KEY";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [error, setError] = useState({
  //   firstname: false,
  //   lastname: false,
  //   email: false,
  //   phone: false,
  //   addressFirstLine: false,
  //   addressComplement: false,
  //   password: false,
  //   confirmpassword: false,
  // });

  // const [isError, setIsError] = useState(true);

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
    // checkError(otherProps);
    // if (!isError) {
    //   registerQuerry(newUser, dispatch, navigate);
    // }
    registerQuerry(newUser, dispatch, navigate);
  };

  // console.log(isError);

  // const checkError = (object) => {
  //   const keys = Object.keys(object);
  //   keys.map((key) => {
  //     if (!object[key]) {
  //       setError((prevState) => ({ ...prevState, [key.toString()]: true }));
  //     } else {
  //       setError((prevState) => ({ ...prevState, [key.toString()]: false }));
  //     }
  //   });
  //   const values = Object.values(error);
  //   if (values.some((val) => val === true)) {
  //     console.log(error);
  //     setIsError(true);
  //   } else {
  //     setIsError(false);
  //   }
  // };

  const handleChangeAddressAndAutoCompletePostalCode = (place) => {
    const { formatted_address, address_components } = place;
    setNewUser((prevState) => ({
      ...prevState,
      addressFirstLine: formatted_address,
    }));
    // eslint-disable-next-line array-callback-return
    const postalCode = address_components.find((element) => {
      if (element["types"][0] === "postal_code") {
        return element;
      }
    });
    if (postalCode.long_name) {
      setNewUser((prevState) => ({
        ...prevState,
        addressComplement: postalCode.long_name,
      }));
    }
  };

  return (
    <LoginContainer>
      <CategoryTitle>Inscription</CategoryTitle>
      <FormContainer onSubmit={handleSubmit}>
        <TextInput
          required
          type="text"
          name="firstname"
          label="Prénom (Obligatoire)"
          autocomplete="fname"
          // error={error.firstname}
          value={newUser.firstname}
          handleChange={handleChange}
        />
        <TextInput
          required
          type="text"
          name="lastname"
          label="Nom (Obligatoire)"
          autocomplete="family-name"
          // error={error.lastname}
          value={newUser.lastname}
          handleChange={handleChange}
        />
        <TextInput
          required
          type="email"
          name="email"
          label="Email (Obligatoire)"
          autocomplete="email"
          // error={error.email}
          value={newUser.email}
          handleChange={handleChange}
        />
        <TextInput
          required
          type="text"
          name="phone"
          autocomplete="phone"
          label="N° de télephone (Obligatoire)"
          // error={error.phone}
          value={newUser.phone}
          handleChange={handleChange}
        />
        {/* <TextInput
          required
          type="text"
          name="addressFirstLine"
          label="Adresse (Obligatoire)"
          // error={error.addressFirstLine}
          value={newUser.addressFirstLine}
          handleChange={handleChange}
        /> */}
        <TextInputAddress
          required
          label="Votre addresse (Obligatoire)"
          apiKey={GOOGLE_API_KEY_FOR_PLACE}
          placeholder=""
          inputAutocompleteValue={newUser.addressFirstLine}
          value={newUser.addressFirstLine}
          onChange={handleChange}
          type="text"
          name="addressFirstLine"
          onPlaceSelected={(place) => {
            handleChangeAddressAndAutoCompletePostalCode(place);
          }}
          options={{
            types: ["address"],
            componentRestrictions: { country: "fr" },
          }}
        />
        <TextInput
          type="text"
          name="addressComplement"
          autocomplete="postal-code"
          label="Code Postal (Obligatoire)"
          // error={error.addressComplement}
          value={newUser.addressComplement}
          handleChange={handleChange}
        />
        <TextInput
          required
          type="password"
          name="password"
          label="Mot de passe (Obligatoire)"
          // error={error.password}
          value={newUser.password}
          handleChange={handleChange}
        />
        <TextInput
          required
          type="password"
          name="confirmpassword"
          label="Confirmation du MDP (Obligatoire)"
          // error={error.confirmpassword}
          value={newUser.confirmpassword}
          handleChange={handleChange}
        />
        <CustomButton
          disabled={
            !newUser.firstname ||
            !newUser.lastname ||
            !newUser.email ||
            !newUser.phone ||
            !newUser.addressFirstLine ||
            !newUser.addressComplement ||
            !newUser.password ||
            !newUser.confirmpassword
          }
          type="submit"
        >
          S'inscrire
        </CustomButton>
      </FormContainer>
    </LoginContainer>
  );
};

export default Register;
