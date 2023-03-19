import React from "react";
import Slider from "react-slick";
import {
  SiFord,
  SiHonda,
  SiPorsche,
  SiBmw,
  SiToyota,
  SiNissan,
  SiBugatti,
  SiRollsroyce,
  SiFerrari,
  SiDaimler,
  SiAlpinelinux,
  SiTata,
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const Brand = (props: Props) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0.1,
    cssEase: "linear",
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0.1,
    cssEase: "linear",
    rtl: true,
  };
  return (
    <div className="pb-20 px-8 md:px-20">
      <div>
        <p className="text-3xl text-transparent  text-center font-bold py-8 bg-clip-text bg-gradient-to-r from-indigo-700 to-red-500">
          Trusted By
        </p>
      </div>
      <Slider {...settings} className="mx-auto">
        <div className="">
          <SiFord className="w-20 h-20 text-blue-800 text-center" />
        </div>
        <div>
          <SiHonda className="w-20 h-20 text-gray-800" />
        </div>
        <div>
          <SiPorsche className="w-20 h-20 text-gray-700" />
        </div>
        <div>
          <SiBmw className="w-20 h-20 text-blue-800" />
        </div>
        <div>
          <SiToyota className="w-20 h-20 text-gray-400" />
        </div>
        <div>
          <SiNissan className="w-20 h-20 text-black" />
        </div>
      </Slider>
      <Slider {...settings2}>
        <div className="">
          <SiBugatti className="w-20 h-20 text-red-600" />
        </div>
        <div>
          <SiRollsroyce className="w-20 h-20 text-gray-800" />
        </div>
        <div>
          <SiFerrari className="w-20 h-20 text-black" />
        </div>
        <div>
          <SiDaimler className="w-20 h-20 text-gray-800" />
        </div>
        <div>
          <SiAlpinelinux className="w-20 h-20 text-blue-700" />
        </div>
        <div>
          <SiTata className="w-20 h-20 text-blue-400" />
        </div>
      </Slider>
    </div>
  );
};

export default Brand;
