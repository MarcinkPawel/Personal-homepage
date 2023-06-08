import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchGitData } from "./fetchData";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./gitDataSlice";

const loadingDelay = 2_000;

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(loadingDelay);
        const repositories = yield call(fetchGitData, username);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
};

export function* gitDataSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};