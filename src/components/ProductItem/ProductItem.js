import React from "react";
import { localServerURI } from "../../_consts/server/server";
import CartControlButtons from "../CartControlButtons/CartControlButtons";
import {
  ProductItemButtonContainer,
  ProductItemContainer,
  ProductItemDescription,
  ProductItemTitleAndPrice,
  ProductItemTop,
} from "./product-item.style";

const ProductItem = ({ children, isCart, ...product }) => {
  return (
    <ProductItemContainer isCart={isCart}>
      <ProductItemTop isCart={isCart}>
        <div>
          <img
            src={`${localServerURI}/uploads/${product.imgURI}`}
            alt={product?.name}
          />
        </div>
        <ProductItemTitleAndPrice>
          <h3>{product?.name}</h3>
          <span>
            {product?.price?.toFixed(2)}
            <small>€</small>
          </span>
        </ProductItemTitleAndPrice>
      </ProductItemTop>
      {!isCart && (
        <>
          <CartControlButtons _id={product._id} product={product} />
          <ProductItemDescription>
            <p>{product.description}</p>
          </ProductItemDescription>
        </>
      )}
      <ProductItemButtonContainer>{children}</ProductItemButtonContainer>
    </ProductItemContainer>
  );
};

export default ProductItem;
