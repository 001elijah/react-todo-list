import { createSlice } from "@reduxjs/toolkit";
import { getTodos, postTodo, deleteTodo, patchTodo } from "../operations/todosOperations";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.fulfilled, (state, { payload }) => {
        state.todos = payload;
      })
      .addCase(postTodo.fulfilled, (state, { payload }) => {
        state.todos.push(payload);
      })
      .addCase(patchTodo.fulfilled, (state, { payload }) => {
        state.todos.splice(
          state.todos.findIndex(({ id }) => id === payload.id),
          1,
          payload
        );
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.todos.splice(
          state.todos.findIndex(({ id }) => id === payload),
          1
        );
      })
      .addMatcher(
        (action) =>
          action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.error = payload;
        }
      );
  },
});

export default todosSlice.reducer;
