import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appReducer } from "./app/app.reducers";

const persistConfig = {
  key: "la-pouletterie",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  app: appReducer,
});

export default persistReducer(persistConfig, rootReducer);
