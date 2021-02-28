import { combineReducers } from "redux";
import reducerChocos from "./reducer";

export const rootReducer = combineReducers({
  store: reducerChocos,
});
