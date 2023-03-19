import {createRoot} from "react-dom/client";
import App from "./App";
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";

import store from "@Redux/store";
import {Navbar, ErrorPage, PokemonList, FavouritesList} from "@Components";

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
    element: <PokemonList />,
  },
  {
    path: "/favourites",
    element: <FavouritesList />,
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
