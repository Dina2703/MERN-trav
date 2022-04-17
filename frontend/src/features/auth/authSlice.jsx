import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Get user from localStorage.
//JSON.parse(string) converts JSON String to Object. Remember localStorage can only have strings so we want to parse it, then save the object into 'user'.
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: () => {},
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
