import { Grid, Typography } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating";

const ProductReviews = () => {
  return (
    <>
      <Grid md={12} sx={{ mt: 5, textAlign: "left" }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "30px",
            color: "rgb(178, 71, 69) ",
            fontFamily: "sans-serif",
            fontStyle: "revert",
            fontWeight: "700",
          }}
        >
          Product Reviews
        </Typography>
      </Grid>
      <Grid sx={{ mt: "30px" }}>
        <Grid sx={{ textAlign: "left" }}>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </Grid>
        <Grid sx={{ textAlign: "left" }}>
          <Typography variant="p" sx={{ fontSize: "14px" }}>
            F***** Y*****
          </Typography>
          <Typography variant="p" sx={{ fontSize: "30px", padding: "15px" }}>
            .
          </Typography>
          <Typography variant="p" sx={{ fontSize: "14px" }}>
            04 Ocak 2022
          </Typography>
        </Grid>
        <Grid sx={{ pt: "10px" }}>
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            Özenli paketleme ve kahvenin yanına koyduğunuz çikolata ikramı için
            teşekkürler.
          </Typography>
        </Grid>
      </Grid>
      {/* //? Bu kısmı doldurmalı */}
      <Grid sx={{ mt: "30px" }}>
        <Grid sx={{ textAlign: "left" }}>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </Grid>
        <Grid sx={{ textAlign: "left" }}>
          <Typography variant="p" sx={{ fontSize: "14px" }}>
            F***** Y*****
          </Typography>
          <Typography variant="p" sx={{ fontSize: "30px", padding: "15px" }}>
            .
          </Typography>
          <Typography variant="p" sx={{ fontSize: "14px" }}>
            04 Ocak 2022
          </Typography>
        </Grid>
        <Grid sx={{ pt: "10px" }}>
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            Özenli paketleme ve kahvenin yanına koyduğunuz çikolata ikramı için
            teşekkürler.
          </Typography>
        </Grid>
      </Grid>
      {/* //? Bu kısmı doldurmalı */}

      <Grid sx={{ mt: "30px" }}>
        <Grid sx={{ textAlign: "left" }}>
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            readOnly
          />
        </Grid>
        <Grid sx={{ textAlign: "left" }}>
          <Typography variant="p" sx={{ fontSize: "14px" }}>
            F***** Y*****
          </Typography>
          <Typography variant="p" sx={{ fontSize: "30px", padding: "15px" }}>
            .
          </Typography>
          <Typography variant="p" sx={{ fontSize: "14px" }}>
            04 Ocak 2022
          </Typography>
        </Grid>
        <Grid sx={{ pt: "10px" }}>
          <Typography variant="p" sx={{ fontSize: "20px" }}>
            Özenli paketleme ve kahvenin yanına koyduğunuz çikolata ikramı için
            teşekkürler.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductReviews;
