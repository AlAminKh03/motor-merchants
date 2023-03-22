import React from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import Reviews from "../../Components/PrivateRoute/Reviews";

type Props = {};

const reviews = (props: Props) => {
  return (
    <PrivateRoute>
      <div className="flex lg:mt-20 mt-10">
        <div>
          <NestedNav />
        </div>
        <div className="relative  pt-10 lg:pt-0 h-screen lg:ml-28 ml-5 ">
          <Reviews />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default reviews;
