import React from "react";
import { useParams } from "react-router-dom";

const ProductsPage = () => {
  const params = useParams();
  return <div>hello am {params.category}</div>;
};

export default ProductsPage;
