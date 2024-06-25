import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../functional/NavBar";
import Footer from "../functional/Footer";
import ActiveLastBreadcrumb from "../functional/ActiveLastBreadcrumb";
import { Box } from "@mui/material";
import AdminNavbar from "../functional/AdminNavbar";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Box
        sx={{
          width: "80%",
          padding: "20px",
          marginLeft: "40px",
          fontStyle: "italic",
          color: "rgba(70, 46, 33, 1) !important ",
        }}
      >
        <ActiveLastBreadcrumb />
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
