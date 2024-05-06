import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function BlogCard({
  parentXMargin = 0,
  isPictureVisible = true,
  id,
  title,
  description,
  image,
}) {
  return (
    <Card
      sx={{
        marginX: parentXMargin,
        maxWidth: 365,
        backgroundColor: "rgb(218, 202, 186)",
        "&:hover": {
          transform: "scale(1.06)",
          transition: "transform 0.3s ease-in-out",
          display: { xs: "flex", md: "block" },
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "30px", md: "0" },
        },
      }}
    >
      <Link
        to={`/blog`}
        style={{ textDecoration: "none", color: "rgba(70, 46, 33, 1)" }}
      >
        <CardActionArea>
          {isPictureVisible && (
            <CardMedia
              component="img"
              height="240"
              image={image}
              alt="product photo"
              sx={{}}
            />
          )}
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
