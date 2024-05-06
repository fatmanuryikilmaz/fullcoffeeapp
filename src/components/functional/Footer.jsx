import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CoffeeMakerRoundedIcon from "@mui/icons-material/CoffeeMakerRounded";

const Footer = () => {
  return (
    <>
      <hr
        style={{
          height: "1px",
          width: "80%",
          marginTop: "100px",
          backgroundColor: "rgb(178, 71, 69)",
        }}
      />
      <Box
        className="footer-container"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          paddingTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            rowGap: 1,
            m: 0.75,
            p: "0 12px",
            alignItems: "center",
            backgroundColor: "rgb(240, 229, 222)",
            color: "rgba(70, 46, 33, 1) ",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <CoffeeMakerRoundedIcon
              sx={{
                color: "rgba(70, 46, 33, 1)",
                fontSize: "100px",
                "&:hover": {
                  color: "rgb(178, 71, 69)",
                },
              }}
            />
          </Link>
          <Box>
            <FacebookIcon
              sx={{
                fontSize: "24px",
                mr: 1,

                "&:hover": {
                  color: "rgb(178, 71, 69)",
                },
              }}
            />
            <TwitterIcon
              sx={{
                fontSize: "24px",
                mr: 1,

                "&:hover": {
                  color: "rgb(178, 71, 69)",
                },
              }}
            />
            <LinkedInIcon
              sx={{
                fontSize: "24px",
                mr: 1,

                "&:hover": {
                  color: "rgb(178, 71, 69)",
                },
              }}
            />
            <InstagramIcon
              sx={{
                fontSize: "24px",
                mr: 1,

                "&:hover": {
                  color: "rgb(178, 71, 69)",
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "30px",
            flexDirection: { xs: "column", md: "row" },
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              alignItems: { xs: "center", lg: "flex-start" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              rowGap: 1,
              width: { xs: "auto", lg: 209 },
            }}
          >
            <Typography variant="h4">Explore More</Typography>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Impact Reporting
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Our Story
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Customers
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Partners
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Policy
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Order
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              alignItems: { xs: "center", lg: "flex-start" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              rowGap: 1,
              width: { xs: "auto", lg: 209 },
            }}
          >
            <Typography variant="h4">Company</Typography>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                About Us
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Careers
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Advertise With Us
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Contact US
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Our Company
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Our Coffee
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              alignItems: { xs: "center", lg: "flex-start" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              rowGap: 1,
              width: { xs: "auto", lg: 209 },
            }}
          >
            <Typography variant="h4">Orders</Typography>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Pastries
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Web Orders
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                App Orders
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Sustainable Products
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                In-store Menu
              </Typography>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  color: "rgba(70, 46, 33, 1)",
                  fontSize: "16px !important",

                  "&:hover": {
                    color: "rgb(178, 71, 69)",
                  },
                }}
              >
                Coffee Beans
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box
        className="copyrights"
        sx={{
          backgroundColor: "rgb(178, 71, 69)",
          color: "rgb(240, 229, 222)",
          width: "100%",
          padding: "10px 0",
        }}
      >
        <Typography variant="p">
          © Copyright 2024 4K Star All Rights Reserved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
