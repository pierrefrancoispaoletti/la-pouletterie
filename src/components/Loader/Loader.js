import React from "react";
import { ChickenLoaderContainer } from "./loader.style";

const Loader = () => {
  return (
    <ChickenLoaderContainer>
      <div className="chicken-loader">
        <span></span>
      </div>
    </ChickenLoaderContainer>
  );
};

export default Loader;
