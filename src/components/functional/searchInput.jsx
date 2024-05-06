import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function searchInput() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        backgroundColor: "rgb(218, 202, 186)",
        borderColor: "rgba(70, 46, 33, 1) !important",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "rgba(70, 46, 33, 1)" }}
        placeholder="Search a Product..."
        inputProps={{ "aria-label": "search product" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "rgba(70, 46, 33, 1) !important" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
