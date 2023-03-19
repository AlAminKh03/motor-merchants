import React from "react";
import { BiHappyBeaming } from "react-icons/bi";
import { FaCertificate } from "react-icons/fa";
import { AiFillDollarCircle, AiOutlineSafetyCertificate } from "react-icons/ai";

type Props = {};

const Customer = (props: Props) => {
  return (
    <div className="mt-[8rem] pb-10 ">
      <p className="  text-3xl bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-500 font-bold text-black text-center uppercase mb-12">
        Customer Love US
        {/* <AiOutlineSafetyCertificate className="absolute right-48  w-10 h-10 text-indigo-500" /> */}
      </p>
      <div className="flex gap-14 lg:gap-0 items-center lg:justify-between flex-col lg:flex-row ">
        <div>
          <div className="border-[3px] border-indigo-200 w-[200px] h-[200px] relative rounded-md hover:shadow-indigo-400 shadow-md transition-all ease-in duration-300">
            <BiHappyBeaming className=" absolute left-[4.2rem]  -top-8 w-16 h-16 text-indigo-500 bg-white rounded-full p-1" />
            <h3 className="text-center pt-10 text-lg font-bold text-black px-1">
              Satisfied Customers
            </h3>
            <p className="text-gray-600 text-center mx-1 text-sm font-semibold  px-1 bg-indigo-100 rounded-md mt-8 border-b-4 border-black">
              We served <span className="text-indigo-700">370045+</span>{" "}
              customers and received{" "}
              <span className="text-indigo-700">92%</span> positive feedback
            </p>
          </div>
        </div>
        <div>
          <div className="border-[3px] border-amber-200 w-[200px] h-[200px] relative rounded-md hover:shadow-amber-400 shadow-md transition-all ease-in duration-300">
            <FaCertificate className=" absolute -right-6  -top-8 w-16 h-16 text-amber-500 " />
            <h3 className="text-center pt-10 text-lg font-bold text-black px-1">
              Best Quality Product
            </h3>
            <p className="text-gray-600 text-center mx-1 text-sm font-semibold  px-1 bg-amber-100 rounded-md mt-8 border-b-4 border-black">
              <span className="text-amber-700">87+</span> positive reviews from
              customers insuring quality of our products
            </p>
          </div>
        </div>
        <div>
          <div className="border-[3px] border-green-200 w-[200px] h-[200px] relative rounded-md hover:shadow-green-400 shadow-md transition-all ease-in duration-300">
            <AiFillDollarCircle className=" absolute left-[4.2rem]  -top-8 w-16 h-16 text-green-500 bg-white rounded-full p-1" />
            <h3 className="text-center pt-10 text-lg font-bold text-black px-1">
              Increasing Revenue
            </h3>
            <p className="text-gray-600 text-center mx-1 text-sm font-semibold  px-1 bg-green-100 rounded-md mt-8 border-b-4 border-black">
              <span className="text-green-700">12M+</span> Total Revenue
              Increased Compared to previous month positive feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
