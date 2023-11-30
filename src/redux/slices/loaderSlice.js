import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        action => action.type.endsWith("/pending"),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) =>
          action.type.endsWith("/rejected") ||
          action.type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
