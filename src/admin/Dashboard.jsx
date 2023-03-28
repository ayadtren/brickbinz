import React from "react";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <Container className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src="admin-logo.png"
          alt="Admin Logo"
          className="mr-3"
          style={{ height: "5rem" }}
        />
        <h1>Welcome to the Admin Dashboard!</h1>
      </div>
      <hr />
      <div className="d-flex flex-wrap justify-content-around">
        <div className="m-3">
          <h3>All Products</h3>
          <p>View and manage all products in the store.</p>
          <a href="/AdminNav/AllProducts">Go to All Products</a>
        </div>
        <div className="m-3">
          <h3>Orders</h3>
          <p>View and manage all orders made by customers.</p>
          <a href="/AdminNav/Orders">Go to Orders</a>
        </div>
        <div className="m-3">
          <h3>Users</h3>
          <p>View and manage all users registered on the website.</p>
          <a href="/AdminNav/Users">Go to Users</a>
        </div>
        <div className="m-3">
          <h3>Add Product</h3>
          <p>Add a new product to the store.</p>
          <a href="/AdminNav/AddProducts">Add Product</a>
        </div>
        <div className="m-3">
          <h3>Add Slideshow Image</h3>
          <p>Add a new image to the homepage slideshow.</p>
          <a href="/AdminNav/AddImage">Add Slideshow Image</a>
        </div>
        <div className="m-3">
          <h3>View Events</h3>
          <p>View current and upcoming events</p>
          <a href="/AdminNav/ViewEvents">View Events</a>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
