import axios from "axios";
import React, { useState } from "react";
import {Container, Box, Grid, TextField, Typography, Select, MenuItem, Button} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const [products, setProducts] = useState({
    setNumber: "",
    setName: "",
    setPrice: null,
    setLocation: "",
    setQuantity: null,
    setImage: "",
    setTheme: null,
  });

  const handleImageChange = (e) => {
    setProducts((prev) => ({ ...prev, setImage: e.target.files[0] }));
  };

  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/products", products);
      toast.success("Product added successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add product");
    }
  };

  return (
    <section>
      <Container>
        <ToastContainer />
        <Box mt={4}>
          <Typography variant="h4" align="center" mb={4}>
            Add Products
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Set Number"
                name="setNumber"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Set Name"
                name="setName"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Price"
                type="number"
                name="setPrice"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Branch Location"
                name="setLocation"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                label="Quantity"
                type="number"
                name="setQuantity"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="icon-button-file"
                type="file"
                onChange={handleImageChange}
                required
              />
              <input
                type="text"
                placeholder="Image"
                onChange={handleChange}
                name="setImage"
                required
              />
              <Typography variant="body1" component="span">
                {products.setImage
                  ? products.setImage.name
                  : "No image selected"}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Change Category:</Typography>
              <Select
                fullWidth
                variant="outlined"
                name="setTheme"
                onChange={handleChange}
                required
              >
                <MenuItem value="1">LEGO Architecture</MenuItem>
                <MenuItem value="2">LEGO BrickHeadz</MenuItem>
                <MenuItem value="3">LEGO City</MenuItem>
                <MenuItem value="4">LEGO Classic</MenuItem>
                <MenuItem value="5">LEGO Creator-3-in-1</MenuItem>
                <MenuItem value="6">LEGO DC</MenuItem>
                <MenuItem value="7">LEGO Disney</MenuItem>
                <MenuItem value="8">LEGO Friends</MenuItem>
                <MenuItem value="9">LEGO Harry Potter</MenuItem>
                <MenuItem value="10">LEGO Ideas</MenuItem>
                <MenuItem value="11">LEGO Jurassic World</MenuItem>
                <MenuItem value="12">LEGO Avatar</MenuItem>
                <MenuItem value="13">LEGO Super Mario</MenuItem>
                <MenuItem value="14">LEGO Lord of the Rings</MenuItem>
                <MenuItem value="15">LEGO Marvel</MenuItem>
                <MenuItem value="16">LEGO CMF Series</MenuItem>
                <MenuItem value="17">LEGO Speed Champions</MenuItem>
                <MenuItem value="18">LEGO Star Wars</MenuItem>
                <MenuItem value="19">LEGO Techinic</MenuItem>
                <MenuItem value="20">LEGO Creator Expert/Icons</MenuItem>
                <MenuItem value="21">LEGO Retired</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default AddProducts;
