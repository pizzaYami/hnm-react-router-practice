function getProductDetails(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/pizzaYami/hnm-react-router-practice/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    dispatch({ type: "GET_PRODUCTDETAIL_SUCCESS", payload: { data } });
  };
}

export const productDetailAction = { getProductDetails };
