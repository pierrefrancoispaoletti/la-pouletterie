import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cart/cart.actions";
import { selectCartItems } from "../../redux/reducers/cart/cart.selectors";
import { getSpecificItemCount } from "../../redux/reducers/cart/cart.utils";
import { localServerURI } from "../../_consts/server/server";
import Badge from "../Badge/Badge";
import CustomButton from "../CustoButton/CustomButton";
import {
  ProductImageContainer,
  ProductItemButtonContainer,
  ProductItemContainer,
  ProductItemDescription,
  ProductItemTitleAndPrice,
  ProductItemTop,
} from "./product-item.style";

const ProductItem = ({ children, isCart, ...product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  return (
    <ProductItemContainer isCart={isCart}>
      <ProductItemTop isCart={isCart}>
        <ProductImageContainer style={{ position: "relative" }}>
          {!isCart && <Badge>{getSpecificItemCount(product._id, cart)}</Badge>}
          <img
            src={`${localServerURI}/uploads/${product.imgURI}`}
            alt={product?.name}
          />
          {!isCart && (
            <CustomButton
              style={{
                position: "absolute",
                bottom: "8px",
                right: "0",
                width: "100%",
              }}
              positive
              type="button"
              onClick={() => dispatch(addToCart(product))}
            >
              Ajouter au Panier
            </CustomButton>
          )}
        </ProductImageContainer>
        <ProductItemTitleAndPrice isCart={isCart}>
          <h3>
            {product.hidden ? `CACHE : ${product?.name}` : `${product.name}`}
          </h3>
          <span>
            {product?.price?.toFixed(2)}
            <small>€</small>
          </span>
        </ProductItemTitleAndPrice>
      </ProductItemTop>
      <ProductItemButtonContainer>{children}</ProductItemButtonContainer>
    </ProductItemContainer>
  );
};

export default ProductItem;
