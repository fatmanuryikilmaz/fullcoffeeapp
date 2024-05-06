import React from "react";
import CardCustom from "../functional/CardCustom";
import { Box } from "@mui/material";
import ActiveLastBreadcrumb from "../functional/ActiveLastBreadcrumb";

const Products = () => {
  const data = [
    {
      title: "Turkish Coffee",
      image: "../../../images/banner.jpg",
      id: 1,
      price: 39.99,
    },
    {
      title: "Americano",
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2015/04/americano.jpg",
      id: 2,
      price: 90,
    },
    {
      title: "Latte",
      image:
        "https://www.taftcoffee.com/cdn/shop/articles/1.jpg?v=1688549905&width=2048",
      id: 3,
      price: 109.9,
    },
    {
      title: "Mocha",
      image:
        "https://cdn.dsmcdn.com/mrktng/seo/22ekim6/evde-mocha-yapimi-1.jpg",
      id: 4,
      price: 120,
    },
    {
      title: "Caramel Machiato",
      image:
        "https://cooktoria.com/wp-content/uploads/2016/02/Caramel-Macchiato-Recipe-sq-1.jpg",
      id: 5,
      price: 120,
    },
    {
      title: "Cappuccino",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1200px-Cappuccino_at_Sightglass_Coffee.jpg",
      id: 6,
      price: 109.9,
    },
    {
      title: "Lemonade",
      image:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-konsantre-limonata-01e50b99-5890-411f-a4c2-997a71e8a5cc.jpg",
      id: 7,
      price: 80,
    },
  ];
  return (
    <>
      {/* <Box
        sx={{
          width: "80%",
          padding: "20px",
          marginLeft: "40px",
          fontStyle: "italic",
          color: "rgba(70, 46, 33, 1) !important ",
        }}
      >
        <ActiveLastBreadcrumb />
      </Box> */}
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
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </Box>
    </>
  );
};

export default Products;
