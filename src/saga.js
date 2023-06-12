import { all } from "redux-saga/effects";
import { gitDataSaga } from "./features/getGitData/gitDataSaga";

export function* saga() {
  yield all([
    gitDataSaga()
  ]);
}
