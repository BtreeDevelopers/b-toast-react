import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "./package";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>
);
