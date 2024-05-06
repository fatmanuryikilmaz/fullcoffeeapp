import { Box, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const data = [
    {
      id: 1,
      title: "My First Post",
      image:
        "https://coffeeblog.co.uk/wp-content/uploads/2018/07/best-manual-grinders-in-the-UK-1-300x253.png",
      description:
        "This is my first blog post. I've been learning a lot about web development and I wanted to share some of what I",
    },
    {
      id: 2,
      title: "My Second Post ",
      image:
        "https://coffeeblog.co.uk/wp-content/uploads/2018/07/best-manual-grinders-in-the-UK-1-300x253.png",
      description:
        "This is my first blog post. I've been learning a lot about web development and I wanted to share some of what I",
    },
    {
      id: 3,
      title: "My Third Post",
      image:
        "https://coffeeblog.co.uk/wp-content/uploads/2018/07/best-manual-grinders-in-the-UK-1-300x253.png",
      description:
        "This is my first blog post. I've been learning a lot about web development and I wanted to share some of what I",
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "left",
          color: "rgba(70, 46, 33, 1)",
          margin: "20px 0",
        }}
      >
        <Typography variant="h6">Blogs</Typography>
      </Box>

      {data.map((item) => (
        <BlogCard
          id={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </>
  );
};

export default Blogs;
