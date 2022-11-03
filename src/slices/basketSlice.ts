import { createSelector, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { IBasket, IProduct } from "../types";

// Define a type for the slice state
interface BasketState {
  products: IBasket[];
}

// Define the initial state using that type
const initialState: BasketState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increaseItem: (state, action) => {
      // increase quantity of product if it already exists in basket, otherwise add it
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseItem: (state, action) => {
      // decrease quantity of product if greater than 1, otherwise remove it
      const productIndex = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex !== -1 && state.products[productIndex].quantity > 1) {
        state.products[productIndex].quantity -= 1;
      } else {
        state.products.filter((product) => product.id !== action.payload.id);
      }
    },
    removeItem: (state, action) => {
      // remove product from basket
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { increaseItem, decreaseItem, removeItem } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.basket.products.length;
export const selectCount = (state: RootState) => {
  return state.basket.products.reduce(
    (total, product) => total + product.quantity,
    0
  );
};

export default basketSlice.reducer;
