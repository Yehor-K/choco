import { takeLatest, call, put, all } from "redux-saga/effects";
import { requestChoco, requestChocosSuccessful, requestChocosFailed } from "../reducer/reducer";
import {fetchChocos} from "../services/fetchChocos"

function* requestChocoSaga() {
    try {
        const choco = yield call(fetchChocos);
        console.log(choco, "сага то что получили фетчом");
        yield put(requestChocosSuccessful({ choco }));
    
      } catch {
        yield put(requestChocosFailed());
      }
}

export const fetchChocoWatcher = () => {
  return takeLatest(requestChoco, requestChocoSaga);
};

export function* chocoSaga() {
  yield all([fetchChocoWatcher()]);
}
