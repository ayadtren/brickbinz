import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";

import AddImage from "./admin/AddImage";
import AddProducts from "./admin/AddProducts";
import AdminNav from "./admin/AdminNav";
import AllProducts from "./admin/AllProducts";
import Dashboard from "./admin/Dashboard";
import Orders from "./admin/Orders";
import Users from "./admin/Users";
import ViewEvents from "./admin/ViewEvents";
import Layout from "./components/Layout";
import Adminlogin from "./pages/Adminlogin";
import Bookevent from "./pages/Bookevent";
import ContactUs from "./pages/ContactUs";
import OrderCon from "./pages/OrderCon";
import Productviewpg from "./pages/Productviewpg";
import RealHomePage from "./pages/RealHomePage";
import Shop from "./pages/Shop";
import Viewcart from "./pages/Viewcart";

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
    path: "/OrderCon",
    element: (
      <Layout>
        <OrderCon />
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
        path: "/AdminNav/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/AdminNav/Users",
        element: <Users />,
      },
      {
        path: "/AdminNav/AddProducts",
        element: <AddProducts />,
      },
      {
        path: "/AdminNav/AllProducts",
        element: <AllProducts />,
      },
      {
        path: "/AdminNav/AddImage",
        element: <AddImage />,
      },
      {
        path: "/AdminNav/Orders",
        element: <Orders />,
      },
      {
        path: "/AdminNav/ViewEvents",
        element: <ViewEvents />,
      },
      // {
      //   path: "/AdminNav/UpdateProducts/:set_number",
      //   element: <UpdateProducts />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
