import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchGitData } from "./fetchData";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./gitDataSlice";

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(2000);
    const repositories = yield call(fetchGitData, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* gitDataSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
