import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import productDetailReducer from "./productDetailReducer";

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
  productDetail: productDetailReducer,
});
