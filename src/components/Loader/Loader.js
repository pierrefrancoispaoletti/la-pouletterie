import React from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/reducers/app/app.selectors";
import { ChickenLoaderContainer } from "./loader.style";

const Loader = () => {
  const isLoading = useSelector(selectLoading);
  return (
    <ChickenLoaderContainer isLoading={isLoading}>
      <div className="chicken-loader">
        <span></span>
      </div>
    </ChickenLoaderContainer>
  );
};

export default Loader;
