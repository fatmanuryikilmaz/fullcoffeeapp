import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCustom from "../functional/CardCustom";

const AdminProducts = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_BASEURL + process.env.REACT_APP_PRODUCTS)
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => navigation("add-product")}
          sx={{
            backgroundColor: "rgb(240, 229, 222)",
            borderColor: "rgb(178, 71, 69) ",
            color: "rgb(178, 71, 69) ",
            padding: "10px 15px",
            "&:hover": {
              backgroundColor: "rgb(178, 71, 69)",
              borderColor: "rgb(178, 71, 69) ",
              color: "rgb(240, 229, 222) ",
            },
          }}
        >
          Add Product
        </Button>
      </Box>
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
          <CardCustom
            id={item.id}
            title={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </Box>
    </>
  );
};

export default AdminProducts;
