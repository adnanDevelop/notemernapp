import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userToken: localStorage.getItem("noteAppUserToken"),
};

const userAuthSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserToken(state, action) {
      state.userToken = action.payload;
      localStorage.setItem("noteAppUserToken", action.payload);
    },
    logoutUser(state, action) {
      state.userToken = action.payload;
      localStorage.removeItem("noteAppUserToken");
    },
  },
});

export const { setUserToken, logoutUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
