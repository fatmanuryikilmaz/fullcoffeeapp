import React from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Box } from "@mui/joy";
import { Typography } from "@mui/material";

const Basket = () => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        display: "flex",
        gap: "5px",
        position: "relative",
      }}
    >
      <ShoppingBasketOutlinedIcon />
      <Typography
        variant="span"
        sx={{
          position: "absolute",
          top: "-2px",
          left: "18px",
          display: "inline-block",
          background: "#d2aa75",
          color: "#fff",
          fontSize: "10px",
          borderRadius: "50%",
          padding: "0 3px",
          textAlign: "center",
        }}
      >
        0
      </Typography>
      <Typography
        variant="span"
        sx={{ fontSize: "14px", marginTop: "5px", marginLeft: "7px" }}
      >
        0,00 ₺
      </Typography>
    </Box>
  );
};

export default Basket;
