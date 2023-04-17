import { Grid, TextField, Typography } from "@mui/material";
import * as React from "react";

function ContactForm({ updateUserInfo, userInfo }) {
  console.log(userInfo);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={userInfo.firstName}
            onChange={(e) => {
              updateUserInfo("firstName", e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={userInfo.lastName}
            onChange={(e) => {
              updateUserInfo("lastName", e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={userInfo.email}
            onChange={(e) => {
              updateUserInfo("email", e.target.value);
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ContactForm;
