import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import customAxios from "../../../utils/axios";
import { removeUserFromLocalStorage } from "../../utils/localstorage";
import { clearStoreThunk } from "./userThunk";
const initialState = {
  isValidUser: false,
  isLoading: false,
  username: "",
  access_token: "",
  image: "",
  userId: "",
  favorites: [],
};

export const registerUser = createAsyncThunk(
  "user/register-user",
  async (user, thunkAPI) => {
    const res = await customAxios.post(
      "http://localhost:5000/user/auth/register",
      user
    );

    return res.data;
  }
);

export const loginUser = createAsyncThunk(
  "user/login-user",
  async (user, thunkAPI) => {
    const res = await axios.post(`http://localhost:5000/user/auth/login`, user);

    return res.data;
  }
);

export const getGithubAccessToken = createAsyncThunk(
  "user/githubLogin",
  async (code, thunkAPI) => {
    const token = await customAxios.get(
      "http://localhost:5000/user/getaccesstoken?code=" + code
    );
    return token;
  }
);

export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

export const addFav = createAsyncThunk(
  "user/favMovie",
  async (ids, thunkAPI) => {
    const response = await customAxios.patch(
      "http://localhost:5000/user/addfav/",
      ids
    );
    return response;
  }
);
export const removeFav = createAsyncThunk(
  "user/removeFavorite",
  async (ids, thunkAPI) => {
    try {
      console.log(ids);
      const response = await customAxios.delete(
        "http://localhost:5000/user/removefav/",
        { data: ids }
      );
      return response.data;
    } catch (error) {
      console.error("Error removing favorite:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state, { payload }) => {
      state.isValidUser = false;
      removeUserFromLocalStorage();
      if (payload) {
        toast.success(payload);
        toast.success("You can leave the page now....");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isValidUser = true;
        toast.success("New User Created...");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        if (action.error && action.error.message.includes("409")) {
          toast.error("Use new Email.....");
        } else {
          toast.error("Internal Server ERROR");
        }
        // Log the error to the console
        console.error("Registration failed", action.error);
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isValidUser = true;
        toast.success("Logged in successfully!");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        toast.error("login failed", action.error.message);
        // Log the error to the console
        console.error("Login failed", action.error);
      })
      .addCase(getGithubAccessToken.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getGithubAccessToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isValidUser = true;
        localStorage.setItem("userId", action.payload.data.userData._id);
        localStorage.setItem("access_token", action.payload.data.access_token);
        localStorage.setItem("username", action.payload.data.userData.name);
        localStorage.setItem("image", action.payload.data.userData.image);
        state.access_token = action.payload.data.access_token;
        state.username = action.payload.data.userData.name;
        state.image = action.payload.data.userData.image;
        state.userId = action.payload.data.userData._id;
        toast.success("Logged in successfully!");
      })
      .addCase(getGithubAccessToken.rejected, (state, action) => {
        state.isLoading = false;

        toast.error("login failed", action.error.message);
        // Log the error to the console
        console.error("Login failed", action.error);
      })
      .addCase(addFav.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addFav.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log(action.payload.data.);
        state.favorites = action.payload.data.favoriteIds;
        toast.success("Added to Favorite...");
      })
      .addCase(addFav.rejected, (state, action) => {
        state.isLoading = false;

        toast.error("failed to add fav", action.error.message);

        console.error("Login failed", action.error);
      })
      .addCase(removeFav.pending, (state, action) => {
        state.isLoading = false;
      })
      .addCase(removeFav.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        state.favorites = action.payload;
        toast.info("Removed from favorite list.");
      })
      .addCase(removeFav.rejected, (state, action) => {
        state.isLoading = false;

        toast.error("failed to add fav", action.error.message);

        console.error("Login failed", action.error);
      });
  },
});
export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
