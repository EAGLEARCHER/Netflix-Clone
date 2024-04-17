import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "../state_manager/user/userSlice";
import movieSlice from "./movies/movieSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const appReducer = combineReducers({
  user: userSlice,
  movie: movieSlice,
});

// const rootReducer = (state, action)=>{
//   if(action.type === "LOGOUT" || action.type == "SIGNOUT"){
//     storage.removeItem('persist:root');
//     return appReducer(undefined, action);
//   }
//   return appReducer(state,action);
// }

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
