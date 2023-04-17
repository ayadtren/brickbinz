import React from "react";
import { Container, Grid, Typography, Button, Card, CardContent, CardActions, } from "@mui/material";
import { Link } from "react-router-dom";
import {
  ShoppingCart as AllProductsIcon, Assignment as OrdersIcon, AddShoppingCart as AddProductIcon, PhotoCamera as AddSlideshowIcon,
  Event as ViewEventsIcon,
} from "@mui/icons-material";

const Dashboard = () => {
  return (
    <div className="margin-container">
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Admin Dashboard!
        </Typography>
      </Grid>
      <hr />
      <Grid container justifyContent="center" spacing={4} />
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card variant="outlined">
          <CardContent>
            <AllProductsIcon fontSize="large" />
            <Typography variant="h5" align="center" gutterBottom>
              All Products
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              View and manage all products in the store.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/AdminNav/AllProducts"
              fullWidth
            >
              Go to All Products
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card variant="outlined">
          <CardContent>
            <OrdersIcon fontSize="large" />
            <Typography variant="h5" align="center" gutterBottom>
              Orders
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              View and manage all orders made by customers.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/AdminNav/Orders"
              fullWidth
            >
              Go to Orders
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card variant="outlined">
          <CardContent>
            <AddProductIcon fontSize="large" />
            <Typography variant="h5" align="center" gutterBottom>
              Add Product
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Add a new product to the store.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/AdminNav/AddProducts"
              fullWidth
            >
              Add Product
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card variant="outlined">
          <CardContent>
            <ViewEventsIcon fontSize="large" />
            <Typography variant="h5" align="center" gutterBottom>
              View Events
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              View current and upcoming events
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="success"
              component={Link}
              to="/AdminNav/ViewEvents"
              fullWidth
            >
              View Events
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
    </div>
  );
};

export default Dashboard;

