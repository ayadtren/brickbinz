import React from "react";
import { Container, Row, Col, Form, FormGroup } from "react-router-dom";
const AddProducts = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col Lg="12">
            <h4>Add Products</h4>
            <Form>
              <FormGroup className="form__group">
                <span>Product title</span>
                <input type="text" placeholder="Lego set 1" />
              </FormGroup>

              <FormGroup className="form__group">
                <span>Short Description</span>
                <input type="text" placeholder="lorem...." />
              </FormGroup>

              <FormGroup className="form__group">
                <span>Description</span>
                <input type="text" placeholder="Description...." />
              </FormGroup>
              <div>
                <FormGroup className="form__group">
                  <span>Price</span>
                  <input type="number" placeholder="$10" />
                </FormGroup>

                <FormGroup className="form__group">
                  <span>Category</span>
                  <select>
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
                <FormGroup className="form__group">
                  <span>Product Image</span>
                  <input type="file" />
                </FormGroup>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
