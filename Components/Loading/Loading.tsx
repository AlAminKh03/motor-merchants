import React from "react";
import Lottie from "lottie-react";
import Loader from "../../public/loading.json";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Lottie
        animationData={Loader}
        loop={true}
        className="w-[200px] h-[200px]"
      />
    </div>
  );
};

export default Loading;
