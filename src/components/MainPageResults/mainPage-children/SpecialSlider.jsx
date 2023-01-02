import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { margin } from "@mui/system";

export const SimpleSlider = () => {
  const games = useSelector((state) => state.specials.games);

  const settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          adaptiveHeight: true,

          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 480,

        settings: {
          fade: true,
          adaptiveHeight: true,
          infinite: true,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {games && games.length > 0
        ? games.map((item) => {
            return (
              <Card sx={{ maxWidth: "100%" }} key={item.id}>
                <CardActionArea>
                  <NavLink href="#top" to={`/currentGame/${item.id}`}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.images.original}
                      alt="green iguana"
                    />
                  </NavLink>
                  <CardContent>
                    <Typography
                      textAlign="center"
                      sx={{ fontWeight: "bold", fontSize: 20 }}
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })
        : games}
    </Slider>
  );
};
export default SimpleSlider;
{
  /* <NavLink
to={`/currentGame/${slide.id}`}
className="slider-info"
>
<h1 className="slide-title">{slide.name}</h1>
<p className="para">
  {slide.description_preview
    .split(" ")
    .slice(0, 124)
    .join(" ")}
  ...
</p>
</NavLink> */
}
