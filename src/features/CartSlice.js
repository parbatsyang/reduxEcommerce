import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
  categories: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
      } else {
        const cartProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(cartProduct);
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const nextCart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        state.cart = nextCart;
      }
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.cart[itemIndex].cartQuantity >= 1) {
        state.cart[itemIndex].cartQuantity += 1;
      }
      {
      }
    },
    removeFromCart: (state, action) => {
      const filterProduct = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
      state.cart = filterProduct;
    },
    getTotals: (state, action) => {
      const totalAmount = state.cart.reduce((total, item) => {
        return item.price * item.cartQuantity;
      }, 0);

      state.cartTotalAmount = totalAmount;
    },
  },
});
export const {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
