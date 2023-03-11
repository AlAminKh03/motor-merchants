import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Contexts/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import Orders from "../../Components/PrivateRoute/Orders";

export interface OrderProps {
  _id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  price: number;
  quantity: number;
}

const index = () => {
  const { user, loading } = useContext(AuthContext);
  const [order, setOrder] = useState<OrderProps[]>([]);
  useEffect(() => {
    fetch(`http://localhost:8000/order/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrder(data);
      });
  }, [user?.email]);
  if (loading) {
    return <Loading />;
  }
  return (
    <PrivateRoute>
      <div className="flex justify-center">
        <div>
          <NestedNav />
        </div>
        <div className="relative mx-auto pt-10 lg:pt-0">
          <Orders order={order} />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default index;
