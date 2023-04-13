import React, { useEffect, useState } from "react";
import "../styles/OrderStyles.scss";
import axios from "axios";

const Orders = () => {
  // fetch orders data from an API or database
  // const orders = [
  //   { id: 1, customer: "John Doe", total: 50.0 },
  //   { id: 2, customer: "Jane Smith", total: 25.0 },
  //   { id: 3, customer: "Bob Johnson", total: 100.0 },
  // ];
  const [orders, setorders] = useState([]);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8000/orders");
        setorders(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllOrders();
  }, []);
  return (
    <div>
      <h1 id="margin-element">Orders</h1>
      <table className="order-display-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              <td>{order.order_id}</td>
              <td>{order.order_user_name}</td>
              <td>${order.order_total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
