import { createAction, createReducer } from "@reduxjs/toolkit";
import { AddType, Cart, ChangeQuantity } from "./types";

const initialState: CartState = {
  cartList: [],
  totalAmount: 0,
};

interface CartState {
  cartList: Cart[];
  totalAmount: number;
}

export const addCart = createAction<AddType>("cart/addItem");
export const removeItem = createAction<ChangeQuantity>("cart/removeItem");
export const increaseItem = createAction<ChangeQuantity>("cart/increaseItem");
export const decreaseItem = createAction<ChangeQuantity>("cart/decreaseItem");
export const clearCart = createAction("cart/clearCart");

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addCart, (state, action) => {
    const existingItem = state.cartList.find(
      (cart) => cart.id === action.payload.id,
    );
    if (!existingItem) {
      const newCart: Cart = {
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      };
      state.cartList.push(newCart);
    } else {
      existingItem.quantity += 1;
      existingItem.total += existingItem.price;
    }
    state.totalAmount += action.payload.price;
  });

  builder.addCase(increaseItem, (state, action) => {
    const existingItem = state.cartList.find(
      (cart) => cart.id === action.payload.id,
    );
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.total += existingItem.price;
      state.totalAmount += existingItem.price;
    }
  });

  builder.addCase(decreaseItem, (state, action) => {
    const existingItem = state.cartList.find(
      (cart) => cart.id === action.payload.id,
    );
    if (existingItem?.quantity === 1) return;
    if (existingItem) {
      existingItem.quantity -= 1;
      existingItem.total -= existingItem.price;
      state.totalAmount -= existingItem.price;
    }
  });

  builder.addCase(removeItem, (state, action) => {
    const existingItem = state.cartList.find(
      (cart) => cart.id === action.payload.id,
    );
    if (existingItem) {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload.id,
      );
      state.totalAmount -= existingItem.price;
    }
  });

  builder.addCase(clearCart, (state) => {
    state.cartList = [];
    state.totalAmount = 0;
  });
});

export default cartReducer;
