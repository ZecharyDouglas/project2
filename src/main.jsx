import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { postsApi } from "./features/webPostsSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={postsApi}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  </React.StrictMode>
);
