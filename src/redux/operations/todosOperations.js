import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getTodosAPI,
  postTodoAPI,
  patchTodoAPI,
  deleteTodoAPI,
} from "../../services/jsonplaceholderAPI";

import { toast } from "react-toastify";

export const getTodos = createAsyncThunk(
  "todos/get",
  async (_, { rejectWithValue }) => {
    try {
      const todos = await getTodosAPI();
      return todos;
    } catch (error) {
      if (error?.response?.status === 400) toast(error.message);
      toast(error.message);
      rejectWithValue(error.message);
    }
  }
);

export const postTodo = createAsyncThunk(
  "todos/post",
  async (todoData, { rejectWithValue }) => {
    try {
      const todo = await postTodoAPI(todoData);
      toast(`Task ${todo.id} added successfully`);
      return todo;
    } catch (error) {
      toast(error.message);
      rejectWithValue(error.message);
    }
  }
);

export const patchTodo = createAsyncThunk(
  "todos/patch",
  async (todoData, { rejectWithValue }) => {
    try {
      const todo = await patchTodoAPI(todoData);
      return todo;
    } catch (error) {
      toast(error.message);
      rejectWithValue(error.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/delete",
  async (todoData, { rejectWithValue }) => {
    try {
      await deleteTodoAPI(todoData);
      return todoData;
    } catch (error) {
      toast(error.message);
      rejectWithValue(error.message);
    }
  }
);
