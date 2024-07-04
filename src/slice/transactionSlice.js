import { createSlice } from "@reduxjs/toolkit";

const transactionsStorage = localStorage.getItem("transactions");
const initialState = transactionsStorage ? JSON.parse(transactionsStorage) : [];

const agregarTransacciones = (array) => {
  localStorage.setItem("transactions", JSON.stringify(array));
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    NewTransaction: (state, action) => {
      state.unshift(action.payload);
      agregarTransacciones(state);
    },
  },
});

export const { NewTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
