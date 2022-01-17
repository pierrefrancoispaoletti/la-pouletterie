import React from "react";
// redux
import { useDispatch, useSelector } from "react-redux";

// redux actions
import {
  addToCart,
  removeFromCart,
  substractFromCart,
} from "../../redux/reducers/cart/cart.actions";

//selectors
import { selectCartItems } from "../../redux/reducers/cart/cart.selectors";

// utils
import { getSpecificItemCount } from "../../redux/reducers/cart/cart.utils";

//components
import CustomButton from "../CustoButton/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTrashAlt,
} from "@fortawesome/pro-duotone-svg-icons";

//style
import { ButtonContainer } from "./cart-control-buttons.style";

const CartControlButtons = ({ _id, product }) => {
  const cart = useSelector(selectCartItems);
  const dispatch = useDispatch();
  return (
    <>
      <ButtonContainer>
        <CustomButton
          disabled={!getSpecificItemCount(_id, cart)}
          type="button"
          method="delete"
          badge
          onClick={() => dispatch(substractFromCart(_id))}
        >
          <FontAwesomeIcon icon={faMinus} />
        </CustomButton>
        <div>{getSpecificItemCount(_id, cart)}</div>
        <CustomButton
          type="button"
          method="add"
          badge
          onClick={() => dispatch(addToCart(product))}
        >
          <FontAwesomeIcon icon={faPlus} />
        </CustomButton>
      </ButtonContainer>
      <div>
        <CustomButton
          type="button"
          badge
          disabled={!getSpecificItemCount(_id, cart)}
          onClick={() => dispatch(removeFromCart(_id))}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </CustomButton>
      </div>
    </>
  );
};

export default CartControlButtons;
