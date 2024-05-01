import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/user/userSlice";

const store = configureStore({
  reducer: userSlice,
});

export default store;
