import Image from "next/image";
import React from "react";
import About from "../Components/About/About";

type Props = {};

const about = (props: Props) => {
  return (
    <div className="mx-0 md:mx-[200px]">
      <About />
    </div>
  );
};

export default about;
