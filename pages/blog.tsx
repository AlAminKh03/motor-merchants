import React from "react";
import Blogs from "../Components/Blogs/Blogs";

type Props = {};

const blog = (props: Props) => {
  return (
    <div className="mx-0 md:mx-[200px] mt-20 pb-4">
      <Blogs />
    </div>
  );
};

export default blog;
