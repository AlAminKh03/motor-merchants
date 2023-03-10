import React from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import Construction from "../../Components/Construction/Construction";

type Props = {};

const otherSettings = (props: Props) => {
  return (
    <PrivateRoute>
      <div className="flex ">
        <div>
          <NestedNav />
        </div>
        <div className="relative mx-auto pt-10 lg:pt-0 ">
          <Construction />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default otherSettings;
