import React from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import Construction from "../../Components/Construction/Construction";

type Props = {};

const otherSettings = (props: Props) => {
  return (
    <PrivateRoute>
      <div className="flex gap-2 lg:mt-20 mt-10 h-screen w-[90%]">
        <div>
          <NestedNav />
        </div>
        <div className="relative mx-auto lg:mr-[220px] pt-14 lg:pt-0 h-screen w-full ">
          <Construction />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default otherSettings;
