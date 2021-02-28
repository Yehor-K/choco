import { takeLatest, call, put, all, race } from "redux-saga/effects";
import { requestChoco, requestChocosSuccessful, requestChocosFailed } from "../../store/actions/actionsChocos";
import {fetchChocos} from "../services/fetchChocos"

function* requestChocoSaga() {
    try {
        const choco = yield call(fetchChocos);
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
