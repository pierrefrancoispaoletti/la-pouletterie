import React from "react";

//redux methods
import { useSelector } from "react-redux";

//selectors
import {
  selectCrossedProducts,
  selectProducts,
} from "../../redux/reducers/product/product.selectors";

//Components
import CartControlButtons from "../CartControlButtons/CartControlButtons";

//styles
import {
  SuggestionsContainer,
  SuggestionsListLi,
  SuggestionsListUl,
} from "./suggestions.style";

const Suggestions = () => {
  const products = useSelector(selectProducts);
  const crossedProducts = useSelector(selectCrossedProducts(products));

  return (
    <SuggestionsContainer>
      <h3>Suggestions : </h3>
      <SuggestionsListUl>
        {crossedProducts?.map((product) => {
          const { name, price, _id } = product;
          return (
            <SuggestionsListLi key={_id}>
              <span>
                <span className="suggestion-name">{name} </span>
                <span className="suggestion-price">
                  {price} <small>€</small>
                </span>
              </span>
              <CartControlButtons _id={_id} product={product} />
            </SuggestionsListLi>
          );
        })}
      </SuggestionsListUl>
    </SuggestionsContainer>
  );
};

export default Suggestions;
