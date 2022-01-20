import React from "react";

// redux methods
import { useSelector, useDispatch } from "react-redux";

//actions
import { selectProduct } from "../../redux/reducers/product/product.actions";

//selectors
import { selectSelectedProduct } from "../../redux/reducers/product/product.selectors";

//components
import CustomButton from "../CustoButton/CustomButton";
import { faTimes } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductOverview from "../ProductOverview/ProductOverview";
import Suggestions from "../Suggestions/Suggestions";

//styles
import { ProductDetailContainer } from "./product-details.style";
import CartControlButtons from "../CartControlButtons/CartControlButtons";
import { localServerURI } from "../../_consts/server/server";

const ProductDetail = () => {
  const selectedProduct = useSelector(selectSelectedProduct);
  const dispatch = useDispatch();
  const { name, imgURI } = selectedProduct;

  return (
    <ProductDetailContainer open={selectedProduct.name}>
      <CustomButton
        delete
        badge
        type="button"
        method="delete"
        onClick={() => dispatch(selectProduct({}))}
      >
        <FontAwesomeIcon icon={faTimes} size="1x" />
      </CustomButton>
      <div>
        <div>
          <img
            width="100%"
            style={{ maxHeight: "250px" }}
            src={`${localServerURI}/uploads/${imgURI}`}
            alt={name}
          />
        </div>
        <ProductOverview />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <CartControlButtons
            _id={selectedProduct._id}
            product={selectedProduct}
          />
        </div>
        <Suggestions />
      </div>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
