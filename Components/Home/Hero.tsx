import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import Car from "../../public/Car.json";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-around items-center gap-10 px-10 md:mt-5">
      <div>
        <p className="text-4xl font-bold text-black">
          <span className="bg-indigo-100 p-2 rounded-md">Power</span> Your Ride!
        </p>
        <p className="text-xl font bold py-4">
          Automotive components manufacturer
        </p>
        <p className="text-gray-500">
          Our unwavering commitment to excellence and innovation has made us the
          go-to choice for top-tier automotive companies worldwide. Rest
          assured, we'll continue to set the standard for the industry with our
          cutting-edge technology and superior products.
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <IoCheckmarkDoneCircle className="w-8 h-8 text-indigo-500 " />
          <p>
            {" "}
            <span className="font-bold text-black">Insure Best Quality</span> –
            components are manufactured to the strictest tolerances.
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <IoCheckmarkDoneCircle className="w-12 h-12 text-indigo-500 " />
          <p>
            {" "}
            <span className="font-bold text-black">Deliver Best</span> – We
            deliver top quality injection molded parts produced by our IATF
            16949 certified factory in Poland.
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-2">
          <IoCheckmarkDoneCircle className="w-[25px] h-[25px] text-indigo-500 " />
          <p>
            {" "}
            <span className="font-bold text-black">100% recyclable </span> – All
            of our products are 100% recyclable
          </p>
        </div>
      </div>
      <div className="w-[430px] h-[400px] md:w-[550px] md:h-[500px]">
        <Lottie animationData={Car} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
