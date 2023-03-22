import Image from "next/image";
import React from "react";

type Props = {};

const notFound = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Image src={"/404.png"} width={600} height={600} alt="404" />
    </div>
  );
};

export default notFound;
