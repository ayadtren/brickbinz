import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import productImg from "../images/falcon.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProducts = () => {
  // const deleteProduct = async(id) => {
  //   await fetch(`http://localhost:5000/products/${id}`, {
  //     method: "DELETE",
  // toast.success("product deleted successfully!");
  //   });
  // const newProducts = products.filter((product) => product.id !== id);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">All Products</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={productImg} alt="product" width="100" />
                  </td>
                  <td>Millenium Falcon</td>
                  <td>Star Wars Set</td>
                  <td>$1000</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        //deleteProduct(item.id);
                        toast.success("Product deleted successfully!");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default AllProducts;
