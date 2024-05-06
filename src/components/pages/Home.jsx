import { Box, Typography } from "@mui/material";
import React from "react";
import Banner from "../functional/Banner";
import BlogCard from "../functional/BlogCard";
import TopRated from "../functional/TopRated";
import Blogs from "../functional/Blogs";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          margin: "30px 0",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Banner />
      </Box>
      <Box
        sx={{
          margin: "50px 0",
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", md: "80%" },
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            width: "100%",
            textAlign: "left",
            pl: 2,
            color: "rgb(178, 71, 69) ",
            fontFamily: "sans-serif",
            fontStyle: "revert",
          }}
        >
          <Typography variant="h6">Top Rated</Typography>
        </Box>
        <TopRated />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", md: "80%" },
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Blogs />
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          width: "80%",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <SliderCards />
      </Box> */}
    </>
  );
};

export default Home;
