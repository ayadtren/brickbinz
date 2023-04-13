import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

function Review({ userInfo, paymentInfo, cartItems, sum }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((cartItem) => (
          <ListItem key={cartItem.cart_set_numb} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={cartItem.cart_set_name} secondary={cartItem.cart_set_numb} />
            <Typography variant="body2">${cartItem.cart_set_price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${sum}
          </Typography>
        </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Contact Information
          </Typography>
          <Typography gutterBottom>{userInfo.firstName} {userInfo.lastName}</Typography>
          <Typography gutterBottom>{userInfo.email}</Typography>
        </Grid>


        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <Typography gutterBottom>{paymentInfo.cardName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{paymentInfo.cardNum}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{paymentInfo.cardExp}</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Review;
