import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout.tsx";
import React from "react";
import ContactUs from "./pages/ContactUs"
import RealHomePage from "./pages/RealHomePage";
import Bookevent from "./pages/Bookevent"
import Shop from "./pages/Shop"
import Adminlogin from "./pages/Adminlogin"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
  },
  {
    path: "/home",
    element: (
      <Layout>
        <RealHomePage />
      </Layout>
    ),
  },
  {
    path: "/book",
    element: (
      <Layout>
        <Bookevent />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <ContactUs />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Adminlogin />
      </Layout>
    ),
  },  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
