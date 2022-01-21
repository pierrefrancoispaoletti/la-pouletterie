import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appReducer } from "./app/app.reducers";
import { cartReducer } from "./cart/cart.reducers";
import { paymentReducer } from "./payment/payment.reducers";
import { productReducer } from "./product/product.reducers";
import { userReducer } from "./user/user.reducers";

const persistConfig = {
  key: "la-pouletterie",
  storage,
  whitelist: ["cart", "user"],
};

const rootReducer = combineReducers({
  app: appReducer,
  product: productReducer,
  cart: cartReducer,
  user: userReducer,
  payment: paymentReducer,
});

export default persistReducer(persistConfig, rootReducer);
