import { AppBar, Box, Button, Container, CssBaseline } from "@mui/material";
import * as React from "react";

import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import PaymentForm from "./../pages/checkout/PaymentForm";
import Review from "./../pages/checkout/Review";
import ContactForm from "./checkout/ContactForm";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.facebook.com/BrickBin/">
        Brickbin
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Contact Information", "Payment details", "Review your order"];

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //get data from cart.
  useEffect(() => {
    const fetchAllCartItems = async () => {
      try {
        const res = await axios.get("http://localhost:8000/cart");
        setCartItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllCartItems();
  }, []);

  const updateUserInfo = (field, value) => {
    setUserInfo({
      ...userInfo,
      [field]: value,
    });
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ContactForm userInfo={userInfo} updateUserInfo={updateUserInfo} />
        );
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  //displays product name and price.
  const listItems = cartItems.map((cartItems) => (
    <div className="display-cart">
      <li key={cartItems.cart_set_numb}>
        <h5>{cartItems.cart_set_name}</h5>
        <p>${cartItems.cart_set_price}</p>
      </li>
      {/* hr is just line break. */}
      <hr></hr>
    </div>
  ));

  //NOTE: don't save variables outside of useEffect and functions, they wont update when state updates if you dod that
  const getTotalPrice = () => {
    let totalPrice = 0;
    //add the sum of the total price.
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i]?.cart_set_price;
    }
    return totalPrice;
  };

  //NOTE: this is where you handle the finishing of checkout
  const onSubmit = () => {
    //use userInfo and other form items here to create the order and push to axios
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Brick Bin Checkout
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
