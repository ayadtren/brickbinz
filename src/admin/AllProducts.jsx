import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const themes = {
  1: "LEGO Architecture",
  2: "LEGO BrickHeadz",
  3: "LEGO City",
  4: "LEGO Classic",
  5: "LEGO Creator-3-in-1",
  6: "LEGO DC",
  7: "LEGO Disney",
  8: "LEGO Friends",
  9: "LEGO Harry Potter",
  10: "LEGO Ideas",
  11: "LEGO Jurassic World",
  12: "LEGO Avatar",
  13: "LEGO Super Mario",
  14: "LEGO Lord of the Rings",
  15: "LEGO Marvel",
  16: "LEGO CMF Series",
  17: "LEGO Speed Champions",
  18: "LEGO Star Wars",
  19: "LEGO Technic",
  20: "LEGO Creator Expert/Icons",
  21: "LEGO Retired",
};

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
                          <ProductImage img={product.product_img} />
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
                          <div>{themes[product.theme]}</div>
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

