import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allChoco: [],
  loading: false,
  error: false
};

const reducerChocos = (state = initialState, action) => {
  switch (action.type) {
    case "requestChoco": {
      return {
        ...state,
        loading: true,
      };
    }
    case "requestChocosSuccessful": {
      return {
        ...state,
        allChoco: action.payload.choco,
      };
    }
    case "requestChocosFailed": {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
};

export default reducerChocos;

// const ChocoSlice = createSlice({
//   name: "DB",
//   initialState,
//   reducers: {
//     requestChoco(state) {
//       state.loading = true
//     },
//     requestChocosSuccessful(state, action) {
//       console.log(action);
//       state.allChoco = action.payload.choco;
//     }
//   },
// });

// export const { requestChoco, requestChocosSuccessful, requestChocosFailed } = ChocoSlice.actions;

// export const { reducer } = ChocoSlice;
