import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useLocation } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function ActiveLastBreadcrumb() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      if (!isNaN(crumb)) {
        return;
      }
      return (
        <div className="crumb" key={crumb}>
          <Link
            to={currentLink}
            underline="hover"
            color="inherit"
            style={{ textDecoration: "none", color: "rgba(70, 46, 33, 1)" }}
          >
            {crumb}
          </Link>
        </div>
      );
    });
  return (
    <div role="presentation" onClick={handleClick} className="crumb">
      <Breadcrumbs aria-label="breadcrumb">
        {/* <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link> */}
        {location.pathname !== "/" && (
          <Link
            underline="hover"
            style={{ textDecoration: "none", color: "rgba(70, 46, 33, 1)" }}
            to={"/"}
          >
            home
          </Link>
        )}
        {crumbs}
      </Breadcrumbs>
    </div>
  );
}
