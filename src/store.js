import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { saga } from "./saga";
import themeReducer from "./features/ThemeToggle/themeSlice";
import gitDataReducer from "./features/getGitData/gitDataSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    theme: themeReducer,
    gitData: gitDataReducer,
  },

  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;
