import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Box sx={{ height: "530px" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: "80px",
          color: "rgba(70, 46, 33, 1)",
          margin: "100px",
          marginTop: "200px",
        }}
      >
        404 - Not Found
      </Typography>
    </Box>
  );
};

export default NotFound;
