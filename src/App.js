import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import NotFound from "./NotFound";
import AddImage from "./admin/AddImage";
import AddProducts from "./admin/AddProducts";
import AdminNav from "./admin/AdminNav";
import AllProducts from "./admin/AllProducts";
import Dashboard from "./admin/Dashboard";
import Orders from "./admin/Orders";
import UpdateProducts from "./admin/UpdateProducts";
import ViewEvents from "./admin/ViewEvents";
import ViewTickets from "./admin/ViewTickets";
import AuthProvider from "./auth/AuthProvider";
import Layout from "./components/Layout";
import Adminlogin from "./pages/Adminlogin";
import Bookevent from "./pages/Bookevent";
import Checkout from "./pages/Checkout";
import RealHomePage from "./pages/RealHomePage";
import Shop from "./pages/Shop";
import Ticket from "./pages/Ticket";
import Viewcart from "./pages/Viewcart";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Layout>
            <ToastContainer />
            <Routes>
              <Route exact path="/" element={<RealHomePage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/book" element={<Bookevent />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/ticket" element={<Ticket />} />
              <Route path="/Viewcart" element={<Viewcart />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/login" element={<Adminlogin />} />
              <Route path="/Adminlogin" element={<Adminlogin />} />
              <Route path="/AdminNav/*" element={<AdminNav />}>
                <Route path="Dashboard" element={<Dashboard />} />
                <Route path="ViewTickets" element={<ViewTickets />} />
                <Route path="AddProducts" element={<AddProducts />} />
                <Route path="AllProducts" element={<AllProducts />} />
                <Route path="AddImage" element={<AddImage />} />
                <Route path="Orders" element={<Orders />} />
                <Route path="ViewEvents" element={<ViewEvents />} />
                <Route
                  path="UpdateProducts/:set_number"
                  element={<UpdateProducts />}
                />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
