import React from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";

type Props = {};

const index = (props: Props) => {
  return (
    <PrivateRoute>
      <NestedNav />
    </PrivateRoute>
  );
};

export default index;
