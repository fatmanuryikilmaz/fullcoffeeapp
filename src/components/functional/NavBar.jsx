import * as React from "react";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Chip from "@mui/joy/Chip";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Person from "@mui/icons-material/Person";
import Apps from "@mui/icons-material/Apps";
import FactCheck from "@mui/icons-material/FactCheck";
import BookmarkAdd from "@mui/icons-material/BookmarkAdd";
import Popper from "@mui/material/Popper";
import "../../../src/App.css";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "./searchInput";
import LockIcon from "@mui/icons-material/Lock";
import Basket from "./Basket";
import Favories from "./Favories";
import CoffeeMakerRoundedIcon from "@mui/icons-material/CoffeeMakerRounded";
import HamburgerMenu from "./HamburgerMenu";

const useRovingIndex = (options) => {
  const {
    initialActiveIndex = 0,
    vertical = false,
    handlers = {
      onKeyDown: () => {},
    },
  } = options || {};
  const [activeIndex, setActiveIndex] = React.useState(initialActiveIndex);
  const targetRefs = React.useRef([]);
  const targets = targetRefs.current;
  const focusNext = () => {
    let newIndex = activeIndex + 1;
    if (newIndex >= targets.length) {
      newIndex = 0;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const focusPrevious = () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = targets.length - 1;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const getTargetProps = (index) => ({
    ref: (ref) => {
      if (ref) {
        targets[index] = ref;
      }
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (e) => {
      if (Number.isInteger(activeIndex)) {
        if (e.key === (vertical ? "ArrowDown" : "ArrowRight")) {
          focusNext();
        }
        if (e.key === (vertical ? "ArrowUp" : "ArrowLeft")) {
          focusPrevious();
        }
        handlers.onKeyDown?.(e, { setActiveIndex });
      }
    },
    onClick: () => {
      setActiveIndex(index);
    },
  });
  return {
    activeIndex,
    setActiveIndex,
    targets,
    getTargetProps,
    focusNext,
    focusPrevious,
  };
};

const AboutMenu = React.forwardRef(
  ({ focusNext, focusPrevious, ...props }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
      initialActiveIndex: null,
      vertical: true,
      handlers: {
        onKeyDown: (event, fns) => {
          if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
            event.preventDefault();
          }
          if (event.key === "Tab") {
            setAnchorEl(null);
            fns.setActiveIndex(null);
          }
          if (event.key === "ArrowLeft") {
            setAnchorEl(null);
            focusPrevious();
          }
          if (event.key === "ArrowRight") {
            setAnchorEl(null);
            focusNext();
          }
        },
      },
    });

    const open = Boolean(anchorEl);
    const id = open ? "about-popper" : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <div onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? "true" : "false"}
            ref={ref}
            {...props}
            role="menuitem"
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={(theme) => ({
              ...(open && theme.variants.plainHover.neutral),
            })}
          >
            About <KeyboardArrowDown />
          </ListItemButton>
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            disablePortal
            keepMounted
          >
            <List
              role="menu"
              aria-label="About"
              variant="outlined"
              sx={{
                my: 2,
                boxShadow: "md",
                borderRadius: "sm",
                "--List-radius": "8px",
                "--List-padding": "4px",
                "--ListDivider-gap": "4px",
                "--ListItemDecorator-size": "32px",
                backgroundColor: "rgb(240, 229, 222)",
                borderColor: "rgba(70, 46, 33, 1)",
              }}
            >
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(0)}>
                  <ListItemDecorator>
                    <Apps />
                  </ListItemDecorator>
                  Overview
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                  <ListItemDecorator>
                    <Person />
                  </ListItemDecorator>
                  Administration
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(2)}>
                  <ListItemDecorator>
                    <FactCheck />
                  </ListItemDecorator>
                  Facts
                </ListItemButton>
              </ListItem>
            </List>
          </Popper>
        </div>
      </ClickAwayListener>
    );
  }
);

const ProductsMenu = React.forwardRef(
  ({ focusNext, focusPrevious, ...props }, ref) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigation = useNavigate();
    const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
      initialActiveIndex: null,
      vertical: true,
      handlers: {
        onKeyDown: (event, fns) => {
          if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
            event.preventDefault();
          }
          if (event.key === "Tab") {
            setAnchorEl(null);
            fns.setActiveIndex(null);
          }
          if (event.key === "ArrowLeft") {
            setAnchorEl(null);
            focusPrevious();
          }
          if (event.key === "ArrowRight") {
            setAnchorEl(null);
            focusNext();
          }
        },
      },
    });

    const open = Boolean(anchorEl);
    const id = open ? "products-popper" : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <div onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? "true" : "false"}
            ref={ref}
            {...props}
            role="menuitem"
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === "ArrowDown") {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={(theme) => ({
              ...(open && theme.variants.plainHover.neutral),
            })}
          >
            Products <KeyboardArrowDown />
          </ListItemButton>
          <Popper
            id={id}
            open={open}
            anchorEl={anchorEl}
            disablePortal
            keepMounted
          >
            <List
              role="menu"
              aria-label="About"
              variant="outlined"
              sx={{
                my: 2,
                boxShadow: "md",
                borderRadius: "sm",
                minWidth: 180,
                "--List-radius": "8px",
                "--List-padding": "4px",
                "--ListDivider-gap": "4px",
                backgroundColor: "rgb(240, 229, 222) !important",
                borderColor: "rgba(70, 46, 33, 1)",
              }}
            >
              <ListItem
                role="none"
                sx={{ backgroundColor: "rgb(240, 229, 222) !important" }}
              >
                <ListItemButton
                  role="menuitem"
                  {...getTargetProps(0)}
                  onClick={() => navigation("/sales")}
                >
                  <ListItemContent>Sale</ListItemContent>
                  <Chip size="sm" variant="soft" color="danger">
                    Last 2 days!
                  </Chip>
                </ListItemButton>
              </ListItem>
              <ListDivider />
              <ListItem role="none">
                <ListItemButton
                  role="menuitem"
                  {...getTargetProps(1)}
                  onClick={() => navigation("/products")}
                >
                  Products
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton
                  role="menuitem"
                  {...getTargetProps(2)}
                  onClick={() => navigation("/top-sellers")}
                >
                  Top Sellers
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  role="menuitem"
                  {...getTargetProps(3)}
                  onClick={() => navigation("/categories")}
                >
                  Categories
                </ListItemButton>
              </ListItem>
            </List>
          </Popper>
        </div>
      </ClickAwayListener>
    );
  }
);

const NavBar = () => {
  const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
    useRovingIndex();
  const navigation = useNavigate();
  return (
    <>
      <Box
        sx={{
          minHeight: 100,
          backgroundColor: "rgb(178, 71, 69)",
          width: "100%",
          display: { xs: "none", md: "flex" },
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
                color: "rgb(218, 202, 186)",
                fontSize: "60px",
                "&:hover": {
                  color: "rgba(70, 46, 33, 1)",
                },
              }}
            />
            <Typography
              variant="span"
              sx={{
                color: "rgb(218, 202, 186)",
                "&:hover": {
                  color: "rgba(70, 46, 33, 1)",
                },
                fontSize: "20px",
              }}
            >
              Coffee Shop
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <SearchInput />
          <Link to="/sign-up" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                color: "rgb(218, 202, 186)",
              }}
            >
              <LockIcon />
              <Typography variant="p">Sign Up</Typography>
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            color: "rgb(218, 202, 186)",
          }}
        >
          <Box>
            <Favories />
          </Box>
          <Box onClick={() => navigation("/cart")}>
            <Basket />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: 190,
          marginTop: 1,
        }}
      >
        <List
          role="menubar"
          orientation="horizontal"
          sx={{
            "--List-radius": "8px",
            "--List-padding": "4px",
            "--List-gap": "8px",
            "--ListItem-gap": "0px",

            "& .MuiListItemButton-root:hover": {
              color: "rgb(178, 71, 69) !important",
              backgroundColor: "rgb(240, 229, 222) !important",
            },
            marginTop: 2,
          }}
        >
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              justifyContent: "left",
            }}
          >
            <HamburgerMenu />
          </Box>
          <ListItem role="none" sx={{}}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemButton
                role="menuitem"
                {...getTargetProps(0)}
                component="a"
                href="#navigation-menu"
              >
                <ListItemDecorator
                  sx={{
                    marginTop: "3px",
                    height: "25px",
                  }}
                >
                  <CoffeeIcon />
                </ListItemDecorator>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "600",
                    color: "rgba(70, 46, 33, 1) ",
                  }}
                >
                  Home
                </Typography>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem role="none">
            <AboutMenu
              onMouseEnter={() => {
                setActiveIndex(1);
                targets[1].focus();
              }}
              focusNext={focusNext}
              focusPrevious={focusPrevious}
              {...getTargetProps(1)}
            />
          </ListItem>
          <ListItem role="none">
            <ProductsMenu
              onMouseEnter={() => {
                setActiveIndex(2);
                targets[2].focus();
              }}
              focusNext={focusNext}
              focusPrevious={focusPrevious}
              {...getTargetProps(2)}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
export default NavBar;
