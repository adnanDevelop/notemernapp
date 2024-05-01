// import { createContext, useContext, useState } from "react";

// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const [userToken, setUserToken] = useState(
//     localStorage.getItem("noteAppUserToken")
//   );

//   //   Storing user token in local storage
//   const storeToken = (value) => {
//     setUserToken(value);
//     return localStorage.setItem("noteAppUserToken", value);
//   };

//   // Logout function
//   const logoutUser = () => {
//     setUserToken("");
//     return localStorage.removeItem("noteAppUserToken");
//   };

//   return (
//     <AppContext.Provider value={{ userToken, storeToken, logoutUser }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// // Custom hook
// const UseAppContext = () => useContext(AppContext);

// export { AppProvider, UseAppContext };

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../feature/user/userSlice";

const store = configureStore({
  reducer: userSlice,
});

export default store;
