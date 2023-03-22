import Image from "next/image";
import React from "react";
import About from "../Components/About/About";

type Props = {};

const about = (props: Props) => {
  return (
    <div className="mx-0 md:mx-[190px] mt-14">
      <About />
    </div>
  );
};

export default about;
