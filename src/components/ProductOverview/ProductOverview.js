import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedProduct } from "../../redux/reducers/product/product.selectors";

const ProductOverview = () => {
  const selectedProduct = useSelector(selectSelectedProduct);
  const { name, description, price, allergenes } = selectedProduct;
  return (
    <div style={{ margin: "8px 12px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "1.3rem",
        }}
      >
        <h2>{name}</h2>
        <span>
          {price} <small>€</small>
        </span>
      </div>
      <div>
        <p style={{ fontSize: "1.3em", lineHeight: "1.5" }}>{description}</p>
      </div>
      <div>
        <ul>
          {allergenes?.map((allergene) => (
            <li>{allergene}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductOverview;
