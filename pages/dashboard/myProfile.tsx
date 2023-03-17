import React from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";

type Props = {};

const myProfile = (props: Props) => {
  return (
    <PrivateRoute>
      <div className="flex ">
        <div>
          <NestedNav />
        </div>
        <div className="relative mx-auto lg:pt-0 "></div>
      </div>
    </PrivateRoute>
  );
};

export default myProfile;
