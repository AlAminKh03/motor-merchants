import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
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
  paid: boolean;
}
[];

const index = () => {
  const { user, loading } = useContext(AuthContext);
  // const [order, setOrder] = useState<OrderProps[]>([]);
  // useEffect(() => {
  //   fetch(`http://localhost:8000/order/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOrder(data);
  //     });
  // }, [user?.email, loading]);
  const {
    data: order = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:8000/order/${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = response.json();

      return data;
    },
  });
  if (isLoading) {
    refetch();
    return <Loading />;
  }
  if (loading) {
    return <Loading />;
  }
  refetch();
  return (
    <PrivateRoute>
      <div className="flex ">
        <div>
          <NestedNav />
        </div>
        <div className="relative mx-auto lg:mr-[220px] pt-14 lg:pt-0 h-screen">
          <p className="text-sm font-bold pt-2">
            Ordered email : {user?.email}
          </p>
          <Orders order={order} refetch={refetch} isLoading={isLoading} />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default index;
