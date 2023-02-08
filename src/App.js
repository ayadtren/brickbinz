import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Layout from "./components/Layout.tsx";
import React from "react";
import RealHomePage from "./pages/RealHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout>
        <RealHomePage />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
