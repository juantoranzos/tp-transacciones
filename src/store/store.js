import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../slice/transactionSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});
