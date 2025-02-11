import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../config/apiConfig';

export const fetchSingleProduct = createAsyncThunk("products/fetchSingleProduct", async (productId) => {
    //const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const response = await apiClient.get(`products/${productId}`);
    return response.data;
  }
);

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await apiClient.get('products');
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    viewProduct: {},
    loading: false,
    error: null
  },
  // reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.viewProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
