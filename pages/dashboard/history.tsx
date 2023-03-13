import React from "react";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import Construction from "../../Components/Construction/Construction";

type Props = {};

const history = (props: Props) => {
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

export default history;
