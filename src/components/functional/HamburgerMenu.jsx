import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Box } from "@mui/material";

export default function HamburgerMenu() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            {...bindTrigger(popupState)}
            sx={{
              color: "rgba(70, 46, 33, 1)!important",
              backgroundColor: "rgb(240, 229, 222) !important",
            }}
          >
            <MenuIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={popupState.close}
              sx={{
                color: "rgb(178, 71, 69) !important",
              }}
            >
              Search a product
            </MenuItem>
            <MenuItem
              onClick={popupState.close}
              sx={{
                color: "rgb(178, 71, 69) !important",
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={popupState.close}
              sx={{
                color: "rgb(178, 71, 69) !important",
              }}
            >
              My account
            </MenuItem>
            <MenuItem
              onClick={popupState.close}
              sx={{
                color: "rgb(178, 71, 69) !important",
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
