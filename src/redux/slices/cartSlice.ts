// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ICartItem } from "../../interfaces/interfaces";

// const ADD_ITEM = "ADD_ITEM";

// export const addItem = () => ({});

// // Define the TS type for the counter slice's state
// export interface CartState {
//   CartItems: ICartItem[];
// }

// // Define the initial value for the slice state
// const initialState: CartState = {
//   CartItems: [],
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<ICartItem>) => {
//       const item = state.CartItems.find(
//         (item) => item.id === action.payload.id,
//       );
//       if (item) {
//         item.quantity += 1;
//       } else {
//         state.CartItems.push({ ...action.payload, quantity: 1 });
//       }
//     },
//   },
// });

// console.log(cartSlice.actions.addItem);

// // Export the generated action creators for use in components
// export const { addItem } = cartSlice.actions;

// // Export the slice reducer for use in the store configuration
// export default cartSlice.reducer;
