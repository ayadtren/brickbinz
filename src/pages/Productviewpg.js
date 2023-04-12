import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import sampleimage from "../images/sampleimage.jpg";

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: "auto",
  position: "relative",
});

const StyledMedia = styled(CardMedia)({
  height: 140,
});

const ActionButtons = styled("div")({
  position: "absolute",
  bottom: 16,
  right: 16,
});

const Productviewpg = () => {
  return (
    <StyledCard>
      <StyledMedia image={sampleimage} title="Sample Product" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: $10
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Store Location: Calgary
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: This is a sample product description.
        </Typography>
      </CardContent>
      <ActionButtons>
        <Button variant="contained" color="primary">
          Add to cart
        </Button>
      </ActionButtons>
    </StyledCard>
  );
};

export default Productviewpg;
