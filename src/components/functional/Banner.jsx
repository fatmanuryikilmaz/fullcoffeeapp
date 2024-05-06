import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

export default function Banner() {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgb(218, 202, 186)",
        maxWidth: "100%",
        // "&:hover": {
        //   transform: "scale(1.06)",
        //   transition: "transform 0.3s ease-in-out",
        // },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h5"
            sx={{ padding: "20px", color: "rgba(70, 46, 33, 1) " }}
          >
            Arabica Coffee Beans
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            sx={{ paddingBottom: "20px", color: "rgba(70, 46, 33, 1) " }}
          >
            It is suitable for making Turkish Coffee. With 60 kg (original sack)
            options. Shipping and VAT are included in the price...
          </Typography>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "rgb(218, 202, 186)",
              borderColor: "rgb(178, 71, 69) ",
              color: "rgb(178, 71, 69) ",

              "&:hover": {
                backgroundColor: "rgb(178, 71, 69)",
                borderColor: "rgb(178, 71, 69) ",
                color: "rgb(218, 202, 186) ",
              },
            }}
          >
            Order Now
          </Button>
        </CardContent>
      </Box>
      {/* <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      /> */}
      <CardMedia
        component="img"
        image="../../../images/banner.jpg"
        alt="product photo"
        sx={{
          objectFit: "cover",
          p: "0",
          width: "100%",
          height: "500px",
          overflow: "hidden",
          minWidth: { xs: 200, md: 300 },
        }}
      />
    </Card>
  );
}
