import { CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();

  return (
    <>
      <Grid
        sx={{
          fontSize: "40px",
          color: "rgba(70, 46, 33, 1)",
          padding: "30px",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "40px", textAlign: "center" }}>
          13 Best Manual Coffee Grinders / Hand Grinders in the UK
        </Typography>
      </Grid>
      <Grid container sx={{ width: "80%", padding: "30px" }} spacing={2}>
        <Grid xs={12} md={5}>
          <CardMedia
            component="img"
            image="https://coffeeblog.co.uk/wp-content/uploads/2018/07/best-manual-grinders-in-the-UK-1-300x253.png"
            alt="product photo"
            sx={{
              objectFit: "cover",
              width: "100%",
              overflow: "hidden",
              minWidth: { xs: 200, md: 300 },
            }}
          />
        </Grid>

        <Grid
          xs={12}
          md={7}
          sx={{
            paddingLeft: "30px",
            fontSize: "20px",
            textAlign: "left",
            paddingBottom: "40px",
          }}
        >
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo magni
            delectus dolor consequatur, corrupti eius ea temporibus! Corrupti
            quam, suscipit a sed eveniet consequatur inventore eum amet, cum
            architecto necessitatibus.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            vitae facere mollitia, tempora recusandae amet officia,
            reprehenderit iure ipsam asperiores magni omnis eveniet expedita,
            labore illum assumenda delectus neque. Maxime! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quo magni delectus dolor
            consequatur, corrupti eius ea temporibus! Corrupti quam, suscipit a
            sed eveniet consequatur inventore eum amet, cum architecto
            necessitatibus.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            vitae facere mollitia, tempora recusandae amet officia,
            reprehenderit iure ipsam asperiores magni omnis eveniet expedita,
            labore illum assumenda delectus neque. Maxime!
          </Typography>
        </Grid>
        <Grid
          sx={{
            fontSize: "20px",
            textAlign: "left",
            paddingBottom: "40px",
          }}
        >
          <Typography variant="h4" sx={{ paddingBottom: "20px" }}>
            Which Grinder is the best?
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo magni
            delectus dolor consequatur, corrupti eius ea temporibus! Corrupti
            quam, suscipit a sed eveniet consequatur inventore eum amet, cum
            architecto necessitatibus.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            vitae facere mollitia, tempora recusandae amet officia,
            reprehenderit iure ipsam asperiores magni omnis eveniet expedita,
            labore illum assumenda delectus neque. Maxime!
            <br />
          </Typography>

          <Typography variant="h4" sx={{ paddingTop: "20px" }}>
            Decide yourself...
          </Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo magni
            delectus dolor consequatur, corrupti eius ea temporibus! Corrupti
            quam, suscipit a sed eveniet consequatur inventore eum amet, cum
            architecto necessitatibus. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Quo magni delectus dolor consequatur, corrupti
            eius ea temporibus! Corrupti quam, suscipit a sed eveniet
            consequatur inventore eum amet, cum architecto necessitatibus. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Quo magni
            delectus dolor consequatur, corrupti eius ea temporibus! Corrupti
            quam, suscipit a sed eveniet consequatur inventore eum amet, cum
            architecto necessitatibus.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            vitae facere mollitia, tempora recusandae amet officia,
            reprehenderit iure ipsam asperiores magni omnis eveniet expedita,
            labore illum assumenda delectus neque. Maxime!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Blog;
