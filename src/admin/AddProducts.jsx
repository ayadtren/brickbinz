import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("");
  const [enterPrice, setEnterPrice] = useState("");
  const [enterImage, setEnterImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const addProduct = async (e) => {
    e.preventDefault();
    const product = {
      title: enterTitle,
      shortDesc: enterShortDesc,
      description: enterDescription,
      category: enterCategory,
      price: enterPrice,
      image: enterImage,
    };
    //add product to mysql
    // const res = await fetch("http://localhost:5000/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });
    // const data = await res.json();
    // if (data) {

    toast.success("product added successfully!");
    console.log(product);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <ToastContainer />
            {loading ? <h4 className="py-5">Loading...</h4> : null}
            <h4 className="mb-5">Add Products</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className="form__group">
                <span>Product title</span>
                <input
                  type="text"
                  placeholder="Lego set 1"
                  value={enterTitle}
                  onChange={(e) => setEnterTitle(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup className="form__group">
                <span>Short Description</span>
                <input
                  type="text"
                  placeholder="lorem...."
                  value={enterShortDesc}
                  onChange={(e) => setEnterShortDesc(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup className="form__group">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Description...."
                  value={enterDescription}
                  onChange={(e) => setEnterDescription(e.target.value)}
                  required
                />
              </FormGroup>

              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form__group w-50">
                  <span>Price</span>
                  <input
                    type="number"
                    placeholder="$100"
                    value={enterPrice}
                    onChange={(e) => setEnterPrice(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup className="form__group w-50">
                  <span>Category</span>
                  <select
                    className="w-100 p-2"
                    value={enterCategory}
                    onChange={(e) => setEnterCategory(e.target.value)}
                    required
                  >
                    <option value="Star wars">star wars</option>
                    <option value="Lego">lego</option>
                    <option value="Jungle">jungle</option>
                    <option value="Fantasy">fantasy</option>
                    <option value="Cars">cars</option>
                    <option value="Dragons">dragons</option>
                    <option value="Movies">movies</option>
                  </select>
                </FormGroup>
              </div>

              <div>
                <FormGroup
                  className="form__group"
                  value={enterImage}
                  onChange={(e) => setEnterImage(e.target.value)}
                  required
                >
                  <span>Product Image</span>
                  <input
                    type="file"
                    onChange={(e) => setEnterImage(e.target.files[0])}
                    required
                  />
                </FormGroup>

                <button className="buy__btn" type="submit">
                  Add Product
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
