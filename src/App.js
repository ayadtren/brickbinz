import "./App.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import ContactUs from "./pages/ContactUs";
import RealHomePage from "./pages/RealHomePage";
import Bookevent from "./pages/Bookevent";
import Productviewpg from "./pages/Productviewpg";
import Shop from "./pages/Shop";
import Adminlogin from "./pages/Adminlogin";
import Viewcart from "./pages/Viewcart";
import AdminNav from "./admin/AdminNav";
import AddProducts from "./admin/AddProducts";

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
    path: "/product",
    element: (
      <Layout>
        <Productviewpg />
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
    path: "/Viewcart",
    element: (
      <Layout>
        <Viewcart />
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
  {
    path: "/Adminlogin",
    element: (
      <Layout>
        <Adminlogin />
      </Layout>
    ),
  },
  {
    path: "/AdminNav",
    element: (
      <Layout>
        <AdminNav />
      </Layout>
    ),
    children: [
      {
        path: "/AdminNav/AddProducts",
        element: <AddProducts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
