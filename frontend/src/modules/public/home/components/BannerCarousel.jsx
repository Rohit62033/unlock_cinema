import React from "react";
import Slick from "react-slick";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const BannerCarousel = ({ banners = [] }) => {

  const navigate = useNavigate()
  const Slider = Slick.default || Slick; // Handles different build environments



  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Add this to customize dot placement and remove the gap
    dotsClass: "slick-dots !bottom-2",

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  
  const handleClick = (banner) => {
    if (banner.type === "external") {
      window.open(banner.redirectUrl, "_blank");
    } else {
      navigate(banner.redirectUrl);
    }
  };

  return (
    <div className="relative overflow-hidden"> {/* Wrap to prevent horizontal overflow */}
      <Slider {...settings}>
        {banners.map((banner) => (
          <div
            key={banner._id} className="outline-none px-3 md:px-6"> {/* Removes blue focus ring */}
            <img
              src={banner.image}
              alt={banner.title}
              loading="lazy"
              className="w-full aspect-16/6 md:aspect-3/1 sm:h-[30h] md:h-[35vh] lg:h-[40h] object-fit rounded-lg cursor-pointer"
              onClick={() => handleClick(banner)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 
      bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm"
    >
      <FaChevronLeft className="text-gray-600 font-semibold" />
    </button>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 
      bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm"
    >
      <FaChevronRight className="text-gray-600 font-semibold" />
    </button>
  );
};

export default BannerCarousel;