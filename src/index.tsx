import {createRoot} from "react-dom/client";
import App from "./App";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./redux/store";
import {Navbar, ErrorPage, List} from "./components";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Navbar />
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
