import { combineReducers } from "redux";
import reducerChocos from "./reducerProducts";

export const rootReducer = combineReducers({
  store: reducerChocos,
});
