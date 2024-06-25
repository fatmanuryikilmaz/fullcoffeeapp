import Logout from "@mui/icons-material/Logout";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          boxShadow: "rgba(178, 71, 69,0.3)  10px 1px 10px",
          width: "100%",
          height: "70px",
          mb: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            padding: "0 150px",
          }}
        >
          <Typography
            sx={{ minWidth: 100, cursor: "pointer" }}
            onClick={() => navigation("products/")}
          >
            Products
          </Typography>
          <Typography
            sx={{ minWidth: 100, cursor: "pointer" }}
            onClick={() => navigation("categories/")}
          >
            Categories
          </Typography>
          <Typography
            sx={{ minWidth: 100, cursor: "pointer" }}
            onClick={() => navigation("blogs/")}
          >
            Blogs
          </Typography>
        </Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ mr: "150px" }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Person />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
