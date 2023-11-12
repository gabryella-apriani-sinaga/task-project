import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./stores/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./container/pages/Login/Login";
import Register from "./container/pages/Register/Register";
import Homepage from "./container/pages/Homepage";
import Create from "./container/pages/Create";
import FilterPage from "./container/pages/FilterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/edit/:id",
    element: <Create />,
  },
  {
    path: "/filter",
    element: <FilterPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
