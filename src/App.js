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
import { useUser } from "./UserContext";
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
import OrderCon from "./pages/OrderCon";
import Productviewpg from "./pages/Productviewpg";
import RealHomePage from "./pages/RealHomePage";
import Shop from "./pages/Shop";
import Ticket from "./pages/Ticket";
import Viewcart from "./pages/Viewcart";

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
    <AuthProvider>
      <Router>
        <Layout>
          <ToastContainer />
          <Routes>
            <Route exact path="/" element={<RealHomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/book" element={<Bookevent />} />
            <Route path="/product" element={<Productviewpg />} />
            <Route path="/OrderCon" element={<OrderCon />} />
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
    </AuthProvider>
  );
}

export default App;
