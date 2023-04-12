import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import sampleimage from "../images/sampleimage.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const Productviewpg = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={sampleimage}
            alt="Product main image"
          />
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Product Title:
            </Typography>
            <Typography variant="h6">Price:</Typography>
            <Typography>Store Location:</Typography>
            <Typography>Description:</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        {[sampleimage, sampleimage, sampleimage, sampleimage].map(
          (image, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="100"
                  image={image}
                  alt={`Product image ${index + 1}`}
                />
              </Card>
            </Grid>
          )
        )}
      </Grid>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <button
            className="btn btn-primary"
            type="submit"
            className="AddTocart"
          >
            Add to cart
          </button>
        </Grid>
        <Grid item>
          <a href="http://localhost:3001/">
            <button className="RemoveButton">X</button>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Productviewpg;
