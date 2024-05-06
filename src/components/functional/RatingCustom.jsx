import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const RatingCustom = () => {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={0} precision={0.5} value={3} />
    </Stack>
  );
};

export default RatingCustom;
