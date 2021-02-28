import { all } from "redux-saga/effects";
import { chocoSaga } from "./chocoSaga";


export default function* rootSaga() {
  yield all([
    chocoSaga(),
  ]);
}