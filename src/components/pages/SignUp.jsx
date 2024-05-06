import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import * as React from "react";

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const newUser = {
      email: data.get("email"),
      password: data.get("password"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
    };
    fetch("create....", { method: "POST", body: JSON.stringify(newUser) });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        color: "rgba(70, 46, 33, 1) !important",
        marginBottom: "55px",
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
        {/* <Avatar
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: "transparent",
            color: "rgba(70, 46, 33, 1)",
          }}
        >
          <LockIcon />
        </Avatar>
        <Typography component="h2" variant="h5">
          Sign Up
        </Typography> */}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
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
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
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
            <Grid item xs={12} style={{ marginTop: "10px" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    style={{ color: "rgb(178, 71, 69)" }}
                  />
                }
                label="I want to receive inspiration, marketing promotions and updates via email or message."
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
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href="#"
                variant="body2"
                style={{
                  textDecoration: "none",
                  color: "rgba(70, 46, 33, 1)",
                  fontStyle: "italic",
                }}
              >
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
