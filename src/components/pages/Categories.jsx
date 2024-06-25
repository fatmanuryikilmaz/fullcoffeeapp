import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryCard from "../functional/CategoryCard";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASEURL + process.env.REACT_APP_CATEGORIES)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);
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
        {data.map((item) => (
          <CategoryCard id={item.id} name={item.name} />
        ))}
      </Box>
    </>
  );
};

export default Categories;
