import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function AdminSignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const getUser = {
      email: data.get("email"),
      password: data.get("password"),
    };
    fetch("create....", { method: "POST", body: JSON.stringify(getUser) });
  };

  return (
    <Container
      component="div"
      maxWidth="xs"
      sx={{
        color: "rgba(70, 46, 33, 1) !important",
        margin: "100px 0px",
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
        <Box
          component="form"
          nsoValidate
          onSubmit={handleSubmit}
          sx={{
            color: "rgb(218, 202, 186) ",
            mt: 3,
            border: "1px solid rgb(218, 202, 186) ",
            padding: "70px",
            borderRadius: "10px",
            boxShadow: "rgb(218, 202, 186)  0px 5px 15px",
          }}
        >
          <Grid container spacing={2} sx={{}}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
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
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              backgroundColor: "rgb(218, 202, 186)",
              borderColor: "rgb(178, 71, 69) ",
              color: "rgb(178, 71, 69) ",
              height: "40px",
              width: "550px",
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
            Sign In As Admin
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
