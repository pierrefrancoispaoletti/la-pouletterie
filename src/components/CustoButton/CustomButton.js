import React from "react";
import { CustommButtonStyled } from "./custom-button.style";

const CustomButton = ({ children, ...otherProps }) => {
  return <CustommButtonStyled {...otherProps}>{children}</CustommButtonStyled>;
};

export default CustomButton;
