import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/reducers/app/app.selectors";
import { CustommButtonStyled } from "./custom-button.style";

const CustomButton = ({ children, isDisabled, ...otherProps }) => {
  const isLoading = useSelector(selectLoading);
  return (
    <CustommButtonStyled
      disabled={isLoading && { ...isDisabled }}
      {...otherProps}
    >
      {children}
    </CustommButtonStyled>
  );
};

export default CustomButton;
