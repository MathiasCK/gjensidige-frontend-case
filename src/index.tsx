import {createRoot} from "react-dom/client";
import App from "./App";
import React, {ReactDOM} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Provider} from "react-redux";
import store from "./redux/store";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);
