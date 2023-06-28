import { all } from "redux-saga/effects";
import { gitDataSaga } from "./features/getGitData/gitDataSaga";
import { themeSaga } from "./features/ThemeToggle/themeSaga";

export function* saga() {
  yield all([
    gitDataSaga(),
    themeSaga(),
  ]);
};
