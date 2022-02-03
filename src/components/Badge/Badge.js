import React from "react";
import { BadgeContainer } from "./badge.style";

const Badge = ({ children, ...props }) => {
  return <BadgeContainer {...props}>{children}</BadgeContainer>;
};

export default Badge;
