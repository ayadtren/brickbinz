import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

function PaymentForm({ updatePaymentInfo, paymentInfo }) {
  console.log(paymentInfo);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            value={paymentInfo.cardName}
            onChange={(e) => {
              updatePaymentInfo("cardName", e.target.value)
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            value={paymentInfo.cardNum}
            onChange={(e) => {
              updatePaymentInfo("cardNum", e.target.value)
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            value={paymentInfo.cardExp}
            onChange={(e) => {
              updatePaymentInfo("cardExp", e.target.value)
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={paymentInfo.cardCvv}
            onChange={(e) => {
              updatePaymentInfo("cardCvv", e.target.value)
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PaymentForm;
