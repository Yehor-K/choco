import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allChoco: [],
  loading: false
};

const ChocoSlice = createSlice({
  name: "DB",
  initialState,
  reducers: {
    requestChoco(state) {
      state.loading = true
    },
    requestChocosSuccessful(state, action) {
      console.log(action);
      state.allChoco = action.payload.choco;
    }
  },
});

export const { requestChoco, requestChocosSuccessful, requestChocosFailed } = ChocoSlice.actions;

export const { reducer } = ChocoSlice;