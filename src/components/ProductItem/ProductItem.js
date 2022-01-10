import React from "react";
import {
  ProductItemContainer,
  ProductItemDescription,
  ProductItemTitleAndPrice,
  ProductItemTop,
} from "./product-item.style";

const ProductItem = ({ ...product }) => {
  return (
    <ProductItemContainer>
      <ProductItemTop>
        <div>
          <img src={product.imgURI} alt={product.name} width="80px" />
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
      <div>
        <button type="button" className="">
          Voir le produit
        </button>
        <button type="button" className="">
          Ajouter au Panier
        </button>
      </div>
    </ProductItemContainer>
  );
};

export default ProductItem;
