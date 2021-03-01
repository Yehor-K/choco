import { rootReducer } from "./reducer/rootReducer";
import { createStore } from "redux";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
