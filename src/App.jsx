import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Series from "./pages/Series";
import Countries from "./pages/Countries";
import PageNotFound from "./pages/PageNotFound";
import DetailSeries from "./pages/DetailSeries";
import DetailMovie from "./pages/DetailMovie";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "/populer", Component: Popular },
      { path: "/series", Component: Series },
      { path: "/negara", Component: Countries },
      { path: "/movie/:movieId", Component: DetailMovie },
      { path: "/tv/:serieId", Component: DetailSeries },
      { path: "*", Component: PageNotFound },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
