import { Add, Remove } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  return (
    <Grid
      container
      sx={{ padding: "50px ", gap: "50px", justifyContent: "center" }}
      spacing={2}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          border: "1px",
          borderColor: "rgba(70, 46, 33, 0.2)",
          borderRadius: "10px",
          padding: "25px ",
          boxShadow:
            "0 4px 8px 0 rgba(70, 46, 33,0.2), 0 6px 20px 0 rgba(70, 46, 33,0.19)",
        }}
      >
        <Card sx={{ minWidth: 275, bgcolor: "transparent", boxShadow: "none" }}>
          <CardContent>
            {cartItems.map((item) => (
              <Grid
                container
                key={item.id}
                sx={{ alignItems: "center", mb: 5 }}
              >
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    image={item.imageUrl}
                    alt={item.name}
                    sx={{ maxWidth: "170px" }}
                  />
                </Grid>
                <Grid
                  sx={{
                    textAlign: "left",

                    pl: "25px",
                    color: "rgba(70, 46, 33, 1)",
                  }}
                >
                  <Grid sx={{ pl: "5px" }}>
                    <Typography variant="h6" sx={{ fontSize: "18px" }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: "16px" }} variant="h6">
                      Price: {item.price}.00₺
                    </Typography>
                  </Grid>
                  <Grid container sx={{ alignItems: "center" }}>
                    <IconButton onClick={() => decreaseQuantity(item.id)}>
                      <Remove
                        sx={{
                          fontSize: "10px",
                          border: "1px solid rgb(178, 71, 69) ",
                          borderRadius: "50%",
                          padding: "2px",
                          color: "rgb(178, 71, 69)",
                        }}
                      />
                    </IconButton>
                    <Typography sx={{ fontSize: "16px" }}>
                      {item.quantity}
                    </Typography>
                    <IconButton onClick={() => increaseQuantity(item.id)}>
                      <Add
                        sx={{
                          fontSize: "10px",
                          border: "1px solid rgb(178, 71, 69) ",
                          borderRadius: "50%",
                          padding: "2px",
                          color: "rgb(178, 71, 69)",
                        }}
                      />
                    </IconButton>
                    <Grid sx={{ ml: "10px" }}>
                      <CardActions>
                        <Button
                          sx={{
                            border: "1px solid",
                            backgroundColor: "rgb(218, 202, 186) ",
                            borderColor: "rgb(178, 71, 69) ",
                            color: "rgb(178, 71, 69) ",
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            width: "80px",
                            height: "32px",
                            fontSize: "12px",

                            "&:hover": {
                              backgroundColor: "rgb(178, 71, 69)",
                              borderColor: "",
                              color: "rgb(218, 202, 186)",
                              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
                            },
                          }}
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </Button>
                      </CardActions>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          border: "1px",
          borderColor: "rgba(70, 46, 33, 0.2)",
          borderRadius: "10px",
          padding: "25px ",
          boxShadow:
            "0 4px 8px 0 rgba(70, 46, 33,0.2), 0 6px 20px 0 rgba(70, 46, 33,0.19)",
          height: "220px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            textAlign: "left",
            color: "rgba(70, 46, 33, 1)",
            pl: "5px",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            Total of Product : {cartItems?.length}
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "16px" }}>
            Shipping Total : 00.00₺
          </Typography>
          <hr
            style={{
              border: "none",
              height: "1px",
              backgroundColor: "rgba(70, 46, 33, .5)",
              margin: "20px 0",
            }}
          />

          <Typography variant="h4" sx={{ fontSize: "24px" }}>
            Total : {totalPrice}.00₺
          </Typography>
        </Grid>
        <Button
          sx={{
            backgroundColor: "rgb(178, 71, 69)",
            borderColor: "rgb(178, 71, 69) ",
            color: "rgb(218, 202, 186) ",
            height: "40px",
            width: "200px",
            mt: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",

            "&:hover": {
              backgroundColor: "rgb(218, 202, 186)",
              borderColor: "rgb(178, 71, 69) ",
              color: "rgb(178, 71, 69) ",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          Proceed to checkout
        </Button>
      </Grid>
    </Grid>
  );
};

export default Cart;
