import React from "react";
import { localServerURI } from "../../_consts/server/server";
import {
  ProductItemButtonContainer,
  ProductItemContainer,
  ProductItemDescription,
  ProductItemTitleAndPrice,
  ProductItemTop,
} from "./product-item.style";

const ProductItem = ({ children, ...product }) => {
  return (
    <ProductItemContainer>
      <ProductItemTop>
        <div>
          <img
            src={`${localServerURI}/uploads/${product.imgURI}`}
            alt={product.name}
            width="80px"
            height="80px"
          />
        </div>
        <ProductItemTitleAndPrice>
          <h3>{product.name}</h3>
          <span>
            {product.price.toFixed(2)}
            <small>€</small>
          </span>
        </ProductItemTitleAndPrice>
      </ProductItemTop>
      <ProductItemDescription>
        <p>{product.description}</p>
      </ProductItemDescription>
      <ProductItemButtonContainer>{children}</ProductItemButtonContainer>
    </ProductItemContainer>
  );
};

export default ProductItem;
