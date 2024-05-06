import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import CardCustom from "../functional/CardCustom";
import Pagination from "@mui/material/Pagination";

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: "15px",
        }}
      >
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          sx={{ "& .MuiPaginationItem-root ": { color: "black" } }}
        />
      </Box>
    </>
  );
};

export default SearchPage;
