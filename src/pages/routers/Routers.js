import AddProducts from "./admin/AddProducts";
import ProtectedRoute from "./pages/routers/ProtectedRoute";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import Layout from "./components/Layout";
import ContactUs from "./pages/ContactUs";
import RealHomePage from "./pages/RealHomePage";
import Bookevent from "./pages/Bookevent";
import Shop from "./pages/Shop";
import Adminlogin from "./pages/Adminlogin";
import Viewcart from "./pages/Viewcart";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/" element={<RealHomePage />} />
      <Route path="/home" element={<RealHomePage />} />
      <Route path="/book" element={<Bookevent />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/Viewcart" element={<Viewcart />} />
      <Route path="/login" element={<Adminlogin />} />

      <Route path="/" element={<ProtectedRoute />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="all-products" element={<AllProducts />} />
        <Route path="add-products" element={<AddProducts />} />
      </Route>
      <Route path="login" element={<Adminlogin />} />
      <Route path="addproducts" element={<AddProducts />} />
    </Routes>
  );
};
