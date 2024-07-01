import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box } from "@mui/joy";
import { Typography } from "@mui/material";

const Favories = () => {
  return (
    <Box
      sx={{
        cursor: "pointer",
        fontSize: "large",
        padding: "3px",
        marginTop: "5px",
        position: "relative",
      }}
    >
      <FavoriteBorderOutlinedIcon />
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
    </Box>
  );
};

export default Favories;
