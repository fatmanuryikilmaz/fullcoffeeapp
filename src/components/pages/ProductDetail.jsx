import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/joy";
import { CardMedia, Grid, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useEffect, useState } from "react";
import RatingCustom from "../functional/RatingCustom";
import ProductReviews from "../functional/ProductReviews";
import SimilarProductsSlider from "../functional/SimilarProductsSlider";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const data = [
    {
      title: "Turkish Coffee",
      image: "../../../images/banner.jpg",
      id: 1,
      price: 39.99,
    },
    {
      title: "Americano",
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2015/04/americano.jpg",
      id: 2,
      price: 90,
    },
    {
      title: "Latte",
      image:
        "https://www.taftcoffee.com/cdn/shop/articles/1.jpg?v=1688549905&width=2048",
      id: 3,
      price: 109.9,
    },
    {
      title: "Mocha",
      image:
        "https://cdn.dsmcdn.com/mrktng/seo/22ekim6/evde-mocha-yapimi-1.jpg",
      id: 4,
      price: 120,
    },
    {
      title: "Caramel Machiato",
      image:
        "https://cooktoria.com/wp-content/uploads/2016/02/Caramel-Macchiato-Recipe-sq-1.jpg",
      id: 5,
      price: 120,
    },
    {
      title: "Cappuccino",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1200px-Cappuccino_at_Sightglass_Coffee.jpg",
      id: 6,
      price: 109.9,
    },
    {
      title: "Lemonade",
      image:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-konsantre-limonata-01e50b99-5890-411f-a4c2-997a71e8a5cc.jpg",
      id: 7,
      price: 80,
    },
  ];
  useEffect(() => {
    const foundProduct = data.find((item) => item.id === Number(id));
    setProduct(foundProduct);
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
          sx={{ display: "flex", justifyContent: "center" }}
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
              <Typography variant="p">1071 Rating</Typography>
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
                1071 Favorite
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
              nesciunt tempora aliquam dolorum quod, odit veritatis temporibus
              quo unde et. Pariatur maiores culpa magni, dolor ut debitis
              voluptates sunt obcaecati.
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
              109.99₺
            </Typography>
            <Typography variant="p">99.99₺</Typography>
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

export default ProductDetail;
