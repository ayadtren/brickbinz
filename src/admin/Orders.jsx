import React, { useEffect, useState } from "react";
import "../styles/OrderStyles.scss";
import axios from "axios";

const Orders = () => {

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

