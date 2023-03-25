import React from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import MyProfile from "../../Components/PrivateRoute/MyProfile";

type Props = {};

const myProfile = (props: Props) => {
  return (
    <PrivateRoute>
      <div className="flex mt-20">
        <div>
          <NestedNav />
        </div>
        <div className="relative  lg:pt-0 ">
          <MyProfile />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default myProfile;
