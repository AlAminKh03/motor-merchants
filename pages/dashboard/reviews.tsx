import React from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import Reviews from "../../Components/PrivateRoute/Reviews";

type Props = {};

const reviews = (props: Props) => {
  return (
    <PrivateRoute>
      <div className="flex ">
        <div>
          <NestedNav />
        </div>
        <div className="relative  pt-10 lg:pt-0 h-screen ml-28 ">
          <Reviews />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default reviews;
