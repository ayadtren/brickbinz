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
          <Col lg={15}>
            <h2 className="text-center mb-4">All Products</h2>
            <div className="all-products-container">
              <ul className="list-group">
                <li className="list-group-item">
                  <Row className="list-group-row">
                    <Col><b>Image</b></Col>
                    <Col><b>Set Number</b></Col>
                    <Col><b>Set Name</b></Col>
                    <Col><b>Price</b></Col>
                    <Col><b>Location</b></Col>
                    <Col><b>Quantity</b></Col>
                    <Col><b>Theme</b></Col>
                    <Col></Col>
                  </Row>
                </li>

                {products.map((product) => {
                  return (
                    <li
                      className="list-group-item"
                      key={product.product_set_numb}
                    >
                      <Row className="list-group-row">
                        <Col>
                          <img
                            src={require(`./../images/products/${product.product_img}`)}
                            alt={product.product_img}
                            width="70%"
                          />
                        </Col>
                        <Col>
                          <div>#{product.product_set_numb}</div>
                        </Col>
                        <Col>
                          <div>{product.product_set_name}</div>
                        </Col>
                        <Col>
                          <div>${product.product_price}</div>
                        </Col>
                        <Col>
                          <div>{product.product_location}</div>
                        </Col>
                        <Col>
                          <div>{product.product_quantity}</div>
                        </Col>
                        <Col>
                          <div>{product.theme}</div>
                        </Col>
                        <Col>
                          <div>
                            <button
                              className="btn btn-danger"
                              onClick={() =>
                                handleDelete(product.product_set_numb)
                              }
                            >
                              Delete
                            </button>
                            <button className="btn btn-light">
                              <Link
                                to={`/AdminNav/UpdateProducts/${product.product_set_numb}`}
                              >
                                Update
                              </Link>
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <ul className="list-group">
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
            </ul> */}
          </Col>
        </Row>
      </Container>

      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

const ProductImage = ({ img }) => {
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageModule = await import(`./../images/products/${img}`);
        setProductImage(imageModule.default);
      } catch (error) {
        console.error(`Error importing image: ${img}`, error);
      }
    };

    fetchImage();
  }, [img]);

  if (!productImage) {
    return <div>Loading...</div>;
  }

  return <img src={productImage} alt={img} width="70%" />;
};

export default AllProducts;
