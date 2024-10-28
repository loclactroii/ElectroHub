// import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
// import cartItemReducer from "./slices/cartSlice";

// export const store = configureStore({
//   reducer: {
//     cartItem: cartItemReducer,
//   },
// });

// // Infer the type of 'store'
// export type AppStore = typeof store;
// export type RootState = ReturnType<AppStore["getState"]>;

// // Infer the 'AppDispatch' type from the store itself
// export type AppDispatch = AppStore["dispatch"];

// // Define a reuseable type describing thunk functions
// export type AppThunk<ThunkReturnType = void> = ThunkAction<
//   ThunkReturnType,
//   RootState,
//   unknown,
//   Action
// >;
