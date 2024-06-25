import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/joy";
import { CardMedia, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import RatingCustom from "../functional/RatingCustom";
import ProductReviews from "../functional/ProductReviews";
import SimilarProductsSlider from "../functional/SimilarProductsSlider";
import { useParams } from "react-router-dom";

const AdminProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(
      process.env.REACT_APP_BASEURL + process.env.REACT_APP_PRODUCTS + "/" + id
    )
      .then((res) => res.json())
      .then((res) => setProduct(res.data));
  }, [id]);
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "50px ",
          color: "rgba(70, 46, 33, 1)",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center", maxHeight: "500px" }}
        >
          <CardMedia component="img" image={product?.image} alt="coffee" />
        </Grid>
        <Grid item xs={12} md={5} sx={{ marginLeft: "20px" }}>
          <Grid
            sx={{
              fontSize: "36px",
              marginBottom: "30px",
              fontFamily: "sans-serif",
              fontStyle: "revert",
              marginTop: "30px",
              fontWeight: 700,
            }}
          >
            <Typography variant="h4">{product.title}</Typography>
          </Grid>
          <Grid
            sx={{
              textAlign: "left",
              padding: "15px 0",
              fontSize: "14px",
              fontStyle: "italic",
              "&:hover": { cursor: "pointer" },
              gap: "2px",
            }}
            container
          >
            <Grid item>
              <RatingCustom />
            </Grid>

            <Grid item sx={{ marginTop: "3px", paddingLeft: "3px" }}>
              <Typography variant="p">
                {product.productDetail?.reviewCount} Review
              </Typography>
            </Grid>
            <Grid item md={12}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon
                  sx={{
                    color: "rgba(70, 46, 33, 1)",

                    "&:hover": {
                      color: "rgb(178, 71, 69)",
                    },
                  }}
                />
              </IconButton>

              <Typography variant="p" sx={{ marginTop: "2px" }}>
                {product.productDetail?.favoryCount} Favorite
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              textAlign: "left",
              marginBottom: "20px",
              fontSize: "18px",
              lineHeight: "30px",
              fontFamily: "sans-serif",
              fontStyle: "revert",
            }}
          >
            <Typography variant="p">
              {product.productDetail?.description}
            </Typography>
          </Grid>
          <Grid
            sx={{
              textAlign: "right",
              marginBottom: "15px",
              fontSize: "20px",
              margin: "40px 0 20px 0",
              paddingRight: "20px",
              fontStyle: "normal",
              color: "rgba(70, 46, 33, 1)",
            }}
          >
            <Typography
              variant="p"
              sx={{
                paddingRight: "10px",
                textDecoration: "line-through",
                fontSize: "16px",
                color: "rgb(178, 71, 69) ",
                fontStyle: "italic",
              }}
            >
              {product.oldPrice}
            </Typography>
            <Typography variant="p">{product.price}</Typography>
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "rgb(218, 202, 186)",
                borderColor: "rgb(178, 71, 69) ",
                color: "rgb(178, 71, 69) ",
                height: "40px",
                width: "550px",
                marginBottom: "30px",

                "&:hover": {
                  backgroundColor: "rgb(178, 71, 69)",
                  borderColor: "rgb(178, 71, 69) ",
                  color: "rgb(218, 202, 186) ",
                },
              }}
            >
              Add To Basket
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          padding: "70px 0 0 20px",
          width: "80%",
          textAlign: "left",
          color: "rgb(178, 71, 69) ",
          fontFamily: "sans-serif",
          fontStyle: "revert",
        }}
      >
        <Typography variant="h6">Similar Products</Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "20px 0 0 0",
          color: "rgba(70, 46, 33, 1)",
          width: "80%",
        }}
      >
        <SimilarProductsSlider />
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "50px 0 ",
          color: "rgba(70, 46, 33, 1)",
          width: "80%",
        }}
      >
        <ProductReviews />
      </Grid>
    </>
  );
};

export default AdminProductDetail;
