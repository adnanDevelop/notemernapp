import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import ToastProvider from "./ui/ToastProvider";
import { ReduxProvider } from "./redux/ReduxProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <App />
      <ToastProvider />
    </ReduxProvider>
  </React.StrictMode>
);
