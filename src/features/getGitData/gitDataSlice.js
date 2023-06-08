import { createSlice } from "@reduxjs/toolkit";

const gitDataSlice = createSlice({
    name: "gitHubRepositories",
    initialState: {
        status: "loading",
        repositories: null,
    },
    reducers: {
        fetchRepositories: (state) => {
            state.status = "loading";
        },
        fetchRepositoriesSuccess: (state, { payload: repositories }) => {
            state.repositories = repositories;
            state.status = "success";
        },
        fetchRepositoriesError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = gitDataSlice.actions;

export const selectGitDataState = state => state.gitHubRepositories;

export const selectRepositories = state => selectGitDataState(state).repositories;
export const selectRepositoriesStatus = state => selectGitDataState(state).status;

export default gitDataSlice.reducer;