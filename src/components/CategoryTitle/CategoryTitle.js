import React from "react";
import { CategoryTitleStyled } from "./category-title.style";

const CategoryTitle = ({ children }) => {
  return <CategoryTitleStyled>{children}</CategoryTitleStyled>;
};

export default CategoryTitle;
