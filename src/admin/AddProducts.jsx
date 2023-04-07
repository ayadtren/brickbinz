import axios from "axios";
import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/UpdateProduct.scss";

const AddProducts = () => {
  // const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    setNumber: "",
    setName: "",
    setPrice: null,
    setLocation: "",
    setQuantity: null,
    setImage: "",
    setTheme: null,
  });

  const handleChange = (e) => {
    setProducts(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const handleClick = async e => {
    e.preventDefault()
    try {
      console.log("http://localhost:8000/products", products)
      await axios.post("http://localhost:8000/products", products)
      alert("Product added successfully")
    } catch (err) {
      console.log(err)
    }
  };

  console.log(products)

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <ToastContainer />
            <div className="Container_Product">
            {/* {loading ? <h4 className="py-5">Loading...</h4> : null} */}
            <h4 className="text-center mb-4">Add Products</h4>
            <div className="addProductForm">
              <input type="text" placeholder="Set Number" onChange={handleChange} name="setNumber" required />
              <input type="text" placeholder="Set Name" onChange={handleChange} name="setName" required />
              <input type="number" placeholder="Price" onChange={handleChange} name="setPrice" required />
              <input type="text" placeholder="Branch Location" onChange={handleChange} name="setLocation" required />
              <input type="number" placeholder="Quantity" onChange={handleChange} name="setQuantity" required />
              <input type="text" placeholder="Image" onChange={handleChange} name="setImage" required />
              <div className="Filter_Div">
              <h5 className="Change_Category">Change Category:</h5>
              <select onChange={handleChange} name="setTheme" className="Category_Select">
                <option value="1">LEGO Architecture</option>
                <option value="2">LEGO BrickHeadz</option>
                <option value="3">LEGO City</option>
                <option value="4">LEGO Classic</option>
                <option value="5">LEGO Creator-3-in-1</option>
                <option value="6">LEGO DC</option>
                <option value="7">LEGO Disney</option>
                <option value="8">LEGO Friends</option>
                <option value="9">LEGO Harry Potter</option>
                <option value="10">LEGO Ideas</option>
                <option value="11">LEGO Jurassic World</option>
                <option value="12">LEGO Avatar</option>
                <option value="13">LEGO Super Mario</option>
                <option value="14">LEGO Lord of the Rings</option>
                <option value="15">LEGO Marvel</option>
                <option value="16">LEGO CMF Series</option>
                <option value="17">LEGO Speed Champions</option>
                <option value="18">LEGO Star Wars</option>
                <option value="19">LEGO Techinic</option>
                <option value="20">LEGO Creator Expert/Icons</option>
                <option value="21">LEGO Retired</option>
              </select> <br />
              <div className="Update_Product_Div"> 
              <button onClick={handleClick}>Add Product</button>
            </div>
            </div>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;
