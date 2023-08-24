import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderImg = ({ product }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const Arrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          display: "flex",
          background: "black",
          borderRadius: "50%",
          width: "1.8rem",
          height: "1.8rem",
          justifyContent: "center",
          alignItems: "center",
          top:
            window.innerWidth >= 600 && window.innerWidth < 992
              ? "8rem"
              : window.innerWidth >= 992
              ? "12rem"
              : "6rem",
        }}
      ></div>
    );
  };

  const images = product?.images.map((image) => {
    return image.url;
  });

  const settings = {
    customPaging: function (i) {
      return (
        <figure
          style={{
            transform: i === activeSlide ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.3s",
          }}
          className="h-12 w-12 tp:h-24 tp:w-24"
        >
          <img
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
            }}
            src={images[i]}
          />
        </figure>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: (dots) => (
      <div
        style={{
          listStyle: "none",
          justifyContent: "center",
          position: "relative",
          top: window.innerWidth > 992 ? "4rem" : "1rem",
          display: "flex",
          gap: window.innerWidth > 992 ? "6rem" : "2.5rem",
        }}
      >
        {dots.map((dot, index) => (
          <div key={index}>{dot}</div>
        ))}
      </div>
    ),
  };

  return (
    <Slider
      className="m-auto flex h-[14rem] w-[90%] flex-col gap-4 ml:h-[25rem] tp:h-[45rem] tp:w-1/2"
      {...settings}
    >
      {images?.map((image, index) => (
        <figure key={index}>
          <img
            className="m-auto h-44 w-44 object-contain ml:h-72 ml:w-72 tp:h-96 tp:w-96"
            src={image}
          />
        </figure>
      ))}
    </Slider>
  );
};

export default SliderImg;
