import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import Car from "../../public/Car.json";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex flex-col bg-white lg:grid lg:grid-cols-2 justify-center items-center gap-10 px-10 pt-6 lg:pt-4">
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
          assured, we&apos;ll continue to set the standard for the industry with
          our cutting-edge technology and superior products.
        </p>
        <div className="flex flex-col ">
          <div className="flex  gap-2 mt-4">
            <div className="">
              <IoCheckmarkDoneCircle className=" w-10 text-indigo-500 " />
            </div>
            <p>
              {" "}
              <span className="font-bold text-black">
                Insure Best Quality
              </span>{" "}
              – components are manufactured to the strictest tolerances.
            </p>
          </div>
          <div className="flex  gap-2 mt-2">
            <div className="">
              <IoCheckmarkDoneCircle className=" w-10 text-indigo-500 " />
            </div>
            <p>
              {" "}
              <span className="font-bold text-black">Deliver Best</span> – We
              deliver top quality injection molded parts produced by our IATF
              16949 certified factory in Poland.
            </p>
          </div>
          <div className="flex gap-2 mt-2">
            <div className="">
              <IoCheckmarkDoneCircle className=" w-10 text-indigo-500 " />
            </div>
            <p>
              {" "}
              <span className="font-bold text-black">100% recyclable </span> –
              All of our products are 100% recyclable
            </p>
          </div>
        </div>
        <div className="mt-4 w-[150px]">
          <Link
            href="https://github.com/AlAminKh03/motor-merchants"
            target="_blank"
            className="flex items-center justify-start gap-6 border  border-indigo-500 bg-indigo-50 hover:bg-indigo-100 transition-all ease-in duration-300  p-2  rounded-md"
          >
            <AiFillGithub className="w-6 h-6" />
            <p className="font-bold">Source Code</p>
          </Link>
        </div>
      </div>
      <div className="flex items-center center justify-center md:w-[550px] md:h-[500px]">
        <Lottie animationData={Car} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
