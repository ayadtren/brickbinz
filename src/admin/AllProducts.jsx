import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);

  const handleDelete = async (product_set_numb) => {
    try {
      await axios.delete("http://localhost:8000/products/" + product_set_numb);
      window.location.reload();
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const themeFilter = (themeNumb) => {};

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
                  <strong>Set Number</strong>
                </div>
                <div>
                  <strong>Set Name</strong>
                </div>
                <div>
                  <strong>Price</strong>
                </div>
                <div>
                  <strong>Location</strong>
                </div>
                <div>
                  <strong>Quantity</strong>
                </div>
                <div></div>
              </li>

              {products.map((product) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={product.product_set_numb}
                  >
                    <div>
                      <img
                        src={require(`./../images/products/${product.product_img}`)}
                        alt={product.product_img}
                        width="70%"
                      />
                    </div>
                    <div>#{product.product_set_numb}</div>
                    <div>
                      <h5 className="mb-1">{product.product_set_name}</h5>
                    </div>
                    <div>${product.product_price}</div>
                    <div>{product.product_location}</div>
                    <div>{product.product_quantity}</div>
                    <div>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product.product_set_numb)}
                      >
                        Delete
                      </button>
                      <button>
                        <Link
                          to={`/AdminNav/UpdateProducts/${product.product_set_numb}`}
                        >
                          Update
                        </Link>
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default AllProducts;
