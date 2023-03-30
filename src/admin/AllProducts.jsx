import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import productImg from "../images/falcon.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Image</strong>
                </div>
                <div>
                  <strong>Title</strong>
                </div>
                <div>
                  <strong>Category</strong>
                </div>
                <div>
                  <strong>Price</strong>
                </div>
                <div></div>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                
                  <img src={productImg} alt="product" width="100" />
                
                <div>
                  <h5 className="mb-1">Millenium Falcon</h5>
                  <small>Star Wars Set</small>
                </div>
                <div>
                  <span className="badge badge-primary badge-pill">$1000</span>
                </div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      //deleteProduct(item.id);
                      toast.success("Product deleted successfully!");
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default AllProducts;
