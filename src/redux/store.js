import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import todosReducer from "./slices/todosSlice";
import loaderSliceReducer from "./slices/loaderSlice";

const todosConfigs = {
  key: "todos",
  storage,
  whitelist: [
    "todos",
  ],
};

const persistTodosReducer = persistReducer(todosConfigs, todosReducer);

export const store = configureStore({
  reducer: {
    todos: persistTodosReducer,
    loader: loaderSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
