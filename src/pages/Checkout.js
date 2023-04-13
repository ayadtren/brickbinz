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
  const [product, setProduct] = useState([]);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNum: "",
    cardExp: "",
    cardCvv: ""
  });

  const fullName = (userInfo.firstName) + " " + (userInfo.lastName);

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

  //get data from product.
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products");
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);


  const updateUserInfo = (field, value) => {
    setUserInfo({
      ...userInfo,
      [field]: value,
    });
  };

  const updatePaymentInfo = (field, value) => {
    setPaymentInfo({
      ...paymentInfo,
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
        return (
          <PaymentForm paymentInfo={paymentInfo} updatePaymentInfo={updatePaymentInfo} />
        );
      case 2:
        return (
          <Review userInfo={userInfo} paymentInfo={paymentInfo} cartItems={cartItems} sum={totalPrice} />
        );
      default:
        throw new Error("Unknown step");
    }
  };

  let totalPrice = 0;
  //add the sum of the total price. 
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i]?.cart_set_price;
  }

  //NOTE: this is where you handle the finishing of checkout
  const onSubmit = async (e) => {
    const order = {
      setName: fullName,
      setTotal: totalPrice,
    };
    const newCartItem = { ...cartItems };
    const newProduct = { ...product };
    try {
      console.log(await axios.post("http://localhost:8000/orders", order));
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i]?.cart_set_quantity > 1) {
          newProduct.product_quantity = newProduct.product_quantity - newCartItem.cart_set_quantity;

          console.log(newProduct.product_quantity)

          console.log(await axios.put(
            "http://localhost:8000/products/" + cartItems[i]?.cart_set_numb, newProduct));

          await axios.delete("http://localhost:8000/cart/" + cartItems[i]?.cart_set_numb);

        } else {
          console.log(await axios.delete("http://localhost:8000/products/" + cartItems[i]?.cart_set_numb));

          await axios.delete("http://localhost:8000/cart/" + cartItems[i]?.cart_set_numb);
        }

      }

      setActiveStep(activeStep + 1);
    } catch (err) {
      console.log(err);
    }
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
                  onClick={activeStep === steps.length - 1 ? onSubmit : handleNext}
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
