function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/pizzaYami/hnm-react-router-practice/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

// 여러개의 함수가 올 수 있으므로 객체에 담아서 준다.
export const productAction = { getProducts };
