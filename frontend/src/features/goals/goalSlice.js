import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";

const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new goal
export const createGoal = () =>
  createAsyncThunk("goals/create", async (goalData, thunkAPI) => {
    try {
      //we need to pass user token to createGoal(), for that we used thunkAPI, which has getState() method, that can get access to any part of a state. And token is inside 'user' part of the state.
      const token = thunkAPI.getState().auth.user.token;
      return await goalService.createGoal(goalData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      //we access via action.payload for error message
      return thunkAPI.rejectWithValue(message);
    }
  });

export const goalSlice = createSlice({
  name: "goal",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = goalSlice.actions;

export default goalSlice.reducer;
