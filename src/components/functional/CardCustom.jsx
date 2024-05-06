import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardCustom({ title, image, price, id, oldPrice }) {
  const [favorite, setFavorite] = useState(false);
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(218, 202, 186) ",
        minWidth: 290,
        margin: "25px",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings" sx={{}}>
            <ShoppingBasketOutlinedIcon />
          </IconButton>
        }
        title={title}
      />
      <Link to={`/products/${id}/${title.replace(" ", "-")}`}>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="coffee"
          sx={{ width: "340px" }}
        />
      </Link>

      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <IconButton
            aria-label="add to favorites"
            sx={favorite ? { color: "rgb(178, 71, 69)" } : undefined}
            onClick={() => setFavorite(!favorite)}
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
        <CardContent sx={{}}>
          <Typography variant="p" sx={{ float: "right" }}>
            {price}₺
          </Typography>
          <Typography
            variant="p"
            sx={{
              float: "right",
              paddingRight: "10px",
              fontStyle: "italic",
              color: "rgb(178, 71, 69) ",
              textDecoration: "line-through",
              fontWeight: "400",
            }}
          >
            {oldPrice}
          </Typography>
        </CardContent>
      </CardActions>
    </Card>
  );
}
