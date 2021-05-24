import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import AdminReducer from "./admin/reducers";
import userReducer from "./user/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["admin"],
};

const rootReducer = combineReducers({
  admin: AdminReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
