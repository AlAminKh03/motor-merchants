import React from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import MyProfile from "../../Components/PrivateRoute/MyProfile";

type Props = {};

const myProfile = (props: Props) => {
  return (
    <PrivateRoute>
      <div className="flex gap-2 lg:mt-20 mt-10 min-h-screen w-[90%]">
        <div>
          <NestedNav />
        </div>
        <div className="  relative mx-[20px] lg:mx-[80px] pt-14 lg:pt-0 h-[70%] w-full ">
          <MyProfile />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default myProfile;
