import React from "react";
import { InformativeElementContainer } from "./informative-element.style";

const InformativElement = ({ children }) => {
  return <InformativeElementContainer>{children}</InformativeElementContainer>;
};

export default InformativElement;
