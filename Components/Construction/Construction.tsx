import React from "react";
import Lottie from "lottie-react";
import construction from "../../public/underconstruction-2 (1).json";

type Props = {};

const Construction = (props: Props) => {
  return (
    <div className="w-[350px] h-[450px] md:w-[550px] md:h-[500px] flex items-center justify-center">
      <Lottie animationData={construction} loop={true} />
    </div>
  );
};

export default Construction;
