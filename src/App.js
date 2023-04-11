import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Layout from "./components/Layout";
import NotFound from "./NotFound";
import RealHomePage from "./pages/RealHomePage";
import Shop from "./pages/Shop";
import Bookevent from "./pages/Bookevent";
import Productviewpg from "./pages/Productviewpg";
import OrderCon from "./pages/OrderCon";
import ContactUs from "./pages/ContactUs";
import Viewcart from "./pages/Viewcart";
import Checkout from "./pages/Checkout";
import Adminlogin from "./pages/Adminlogin";
import AdminNav from "./admin/AdminNav";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import AllProducts from "./admin/AllProducts";
import AddProducts from "./admin/AddProducts";
import UpdateProducts from "./admin/UpdateProducts";
import AddImage from "./admin/AddImage";
import Orders from "./admin/Orders";
import ViewEvents from "./admin/ViewEvents";
import { useUser } from "./UserContext";

function PrivateRoute({ element, ...rest }) {
  const { isAuthenticated } = useUser();

  return isAuthenticated && isAuthenticated.isAdmin ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/" />
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<RealHomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/book" element={<Bookevent />} />
          <Route path="/product" element={<Productviewpg />} />
          <Route path="/OrderCon" element={<OrderCon />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/Viewcart" element={<Viewcart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/login" element={<Adminlogin />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/AdminNav/*" element={<AdminNav />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Users" element={<Users />} />
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
  );
}

export default App;
