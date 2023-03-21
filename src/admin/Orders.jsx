import React from "react";

const Orders = () => {
  // fetch orders data from an API or database
  const orders = [
    { id: 1, customer: "John Doe", total: 50.0 },
    { id: 2, customer: "Jane Smith", total: 25.0 },
    { id: 3, customer: "Bob Johnson", total: 100.0 },
  ];

  return (
    <div>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>${order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
