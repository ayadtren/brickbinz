import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/UpdateProduct.scss";
import {Container,Grid,TextField,Typography,Select,MenuItem,FormControl,InputLabel,Button,Box,} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const UpdateProduct = () => {
  const [products, setProducts] = useState({
    setName: "",
    setPrice: null,
    setLocation: "",
    setQuantity: null,
    setImage: "",
    setTheme: null,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const productId = location.pathname.split("/")[3];

  const handleChange = (e) => {
    setProducts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8000/products/" + productId, products);
      navigate("/AdminNav/AllProducts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <Container maxWidth="sm">
        <ToastContainer />
        <Typography variant="h4" align="center" gutterBottom>
          Update Products
        </Typography>
        <form onSubmit={handleClick}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Set Name"
                variant="outlined"
                name="setName"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                variant="outlined"
                name="setPrice"
                type="number"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Branch Location"
                variant="outlined"
                name="setLocation"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Quantity"
                variant="outlined"
                name="setQuantity"
                type="number"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image"
                variant="outlined"
                name="setImage"
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined" required>
                <InputLabel id="setTheme-label">Change Category</InputLabel>
                <Select
                  labelId="setTheme-label"
                  label="Change Category"
                  name="setTheme"
                  onChange={handleChange}
                >
                  {/* Add your MenuItem components here */}
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
                  <MenuItem value="19">LEGO Technic</MenuItem>
                  <MenuItem value="20">LEGO Creator Expert/Icons</MenuItem>
                  <MenuItem value="21">LEGO Retired</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                >
                  Update Product
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    </section>
  );
};

export default UpdateProduct;
