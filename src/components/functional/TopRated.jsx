import React from "react";
import CardCustom from "./CardCustom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";

const TopRated = () => {
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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box sx={{ minHeight: "0px", minWidth: "0px" }}>
        <Slider {...settings}>
          {data.map((item) => (
            <CardCustom
              parentXMargin={2}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default TopRated;
