import axios from "axios";
import { logoutUser } from "./userSlice";
export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/user/auth/register",
      user
    );
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    // Dispatch the `logoutUser` action using thunkAPI.dispatch
    thunkAPI.dispatch(logoutUser(message));
    console.log("Logged out and store cleared.");
    return Promise.resolve();
  } catch (error) {
    console.error("Error clearing the store:", error);
    return Promise.reject(error);
  }
};
