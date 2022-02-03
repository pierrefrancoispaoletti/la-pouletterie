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
  const { imgURI } = selectedProduct;

  return (
    <ProductDetailContainer open={selectedProduct.name}>
      <div>
        <div>
          <CustomButton
            delete
            badge
            type="button"
            onClick={() => dispatch(selectProduct({}))}
          >
            <FontAwesomeIcon icon={faTimes} />
          </CustomButton>
          <div
            style={{
              backgroundImage: `url(${localServerURI}/uploads/${
                imgURI || "pouletterie.jpeg"
              })`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
              minHeight: "250px",
            }}
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <CustomButton
            negative
            type="button"
            onClick={() => dispatch(selectProduct({}))}
          >
            Fermer
          </CustomButton>
        </div>
      </div>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
