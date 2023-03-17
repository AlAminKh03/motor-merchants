import React from "react";
import { BiHappyBeaming } from "react-icons/bi";

type Props = {};

const Customer = (props: Props) => {
  return (
    <div className="mt-[8rem] ">
      <p className="text-3xl bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-500 font-bold text-black text-center uppercase">
        Customer Love US
      </p>
      <div className="flex gap-7 ">
        <div>
          <div className="border-4 border-indigo-600 w-[200px] h-[200px]">
            <BiHappyBeaming className="w-12 h-12 text-black" />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Customer;
