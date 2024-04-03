import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = { productList: [], isLoading: false, error: null };

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/pizzaYami/hnm-react-router-practice/products?q=${searchQuery}`;
      let res = await fetch(url);
      return await res.json();
    } catch (err) {
      thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchProductDetails = createAsyncThunk(
  "product/fetchItem",
  async (id, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/pizzaYami/hnm-react-router-practice/products/${id}`;
      let res = await fetch(url);
      return await res.json();
    } catch (err) {
      thunkApi.rejectWithValue(err.message);
    }
  }
);

// function productReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_PRODUCTDETAIL_SUCCESS":
//       return { ...state, productDetailList: [payload.data] };
//     default: {
//       return { ...state };
//     }
//   }
// }

// export default productReducer;

// ...state 할 필요없다.
const productSlice = createSlice({
  name: "product",
  initialState,
  // 동기적으로 자신의 state를 바꾸는 경우
  reducers: {
    getSingleproducts(state, action) {
      state.productList = action.payload.data;
    },
  },
  // 원래 redux는 async기능 없다.
  // async기능을 위한 외부 라이브러리에 의해서 호출되는건 extra처리
  extraReducers: (builder) => {
    builder
      .addCase(
        // 가져오는 중
        fetchProducts.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      // 성공시
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.isLoading = false;
      })
      // 에러시
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // detail 성공시
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.productList = action.payload;
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
export const productActions = productSlice.actions;
