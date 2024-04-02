let initialState = { productDetailList: [] };

function productDetailReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCTDETAIL_SUCCESS":
      return { ...state, productDetailList: [payload.data] };
    default:
      return { ...state };
  }
}

export default productDetailReducer;
