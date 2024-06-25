import { Box, Button, Container, Grid, TextField } from "@mui/material";
import React from "react";

const AdminAddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const addProduct = {
      title: data.get("title"),
      price: data.get("price"),
      image: data.get("image"),
      description: data.get("description"),
      category: data.get("category"),
    };
    fetch("add....", { method: "POST", body: JSON.stringify(addProduct) });
  };

  return (
    <Container
      component="main"
      sx={{
        color: "rgba(70, 46, 33, 1) !important",
        margin: "55px 0",
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "rgba(70, 46, 33, 1)",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={4}>
              <TextField
                required
                id="title"
                fullWidth
                label="Product Name"
                sx={{
                  ".MuiInputBase-input": {
                    color: "rgba(70, 46, 33, 1) !important",
                  },
                  "& label": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& label.Mui-focused": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "rgb(178, 71, 69)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <TextField
                required
                id="price"
                label="Price"
                fullWidth
                sx={{
                  ".MuiInputBase-input": {
                    color: "rgba(70, 46, 33, 1) !important",
                  },
                  "& label": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& label.Mui-focused": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "rgb(178, 71, 69)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item sm={12} md={4}>
              <TextField
                required
                fullWidth
                id="category"
                label="Category Name"
                sx={{
                  ".MuiInputBase-input": {
                    color: "rgba(70, 46, 33, 1) !important",
                  },
                  "& label": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& label.Mui-focused": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "rgb(178, 71, 69)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="image"
                label="Image url"
                fullWidth
                sx={{
                  ".MuiInputBase-input": {
                    color: "rgba(70, 46, 33, 1) !important",
                  },
                  "& label": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& label.Mui-focused": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "rgb(178, 71, 69)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                label="Product Description"
                sx={{
                  ".MuiInputBase-input": {
                    color: "rgba(70, 46, 33, 1) !important",
                  },
                  "& label": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& label.Mui-focused": {
                    color: "rgba(70, 46, 33, 1)",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "rgb(178, 71, 69)",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "rgb(178, 71, 69)",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "rgb(218, 202, 186)",
                  borderColor: "rgb(178, 71, 69) ",
                  color: "rgb(178, 71, 69) ",
                  height: "50px",
                  marginBottom: "30px",
                  mt: 3,
                  mb: 2,

                  "&:hover": {
                    backgroundColor: "rgb(178, 71, 69)",
                    borderColor: "rgb(178, 71, 69) ",
                    color: "rgb(218, 202, 186) ",
                  },
                }}
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminAddProduct;
