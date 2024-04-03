// import { applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers/index";
// import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import authenticateSlice from "./Slices/authenticateSlice";
import productSlice from "./Slices/productSlice";

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// combinereducer
// thunk
// applyMiddleware
// composeWithDevTools
// 4가지 기능이 configureStore에 내장되어있다.

export const store = configureStore({
  reducer: {
    auth: authenticateSlice,
    product: productSlice,
  },
});
