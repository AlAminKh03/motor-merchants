import Image from "next/image";
import React from "react";

type Props = {};

const serverError = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Image src={"/500.png"} width={600} height={600} alt="500" />
      <p className="font-[VT323] text-2xl font-bold">Please go to homepage</p>
    </div>
  );
};

export default serverError;
