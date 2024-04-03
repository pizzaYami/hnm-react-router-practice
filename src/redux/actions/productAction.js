import { productActions } from "../Slices/productSlice";

// function getProducts(searchQuery) {
//   return async (dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/pizzaYami/hnm-react-router-practice/products?q=${searchQuery}`;
//     let res = await fetch(url);
//     let data = await res.json();
//     // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
//     dispatch(productActions.getAllproducts({ data }));
//     // data 알아서 페이로드로 들어감
//   };
// }

function getProductDetails(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/pizzaYami/hnm-react-router-practice/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    // dispatch({ type: "GET_PRODUCTDETAIL_SUCCESS", payload: { data } });0
    dispatch(productActions.getSingleproducts({ data }));
  };
}

// 여러개의 함수가 올 수 있으므로 객체에 담아서 준다.
export const productAction = { getProductDetails };
// export const productAction = { getProductDetails, getProducts };
