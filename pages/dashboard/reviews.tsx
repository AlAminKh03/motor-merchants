import React from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import Reviews from "../../Components/PrivateRoute/Reviews";

type Props = {};

const reviews = (props: Props) => {
  return (
    <PrivateRoute>
      <div className="flex gap-2 lg:mt-20 mt-10 h-screen w-[90%]">
        <div>
          <NestedNav />
        </div>
        <div className="relative mx-auto lg:mr-[220px] pt-20 lg:pt-0 h-screen w-full">
          <Reviews />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default reviews;
