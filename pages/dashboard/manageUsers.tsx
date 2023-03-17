import React, { useContext } from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import { AuthContext } from "../../Components/Contexts/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import { GetStaticProps } from "next";
import ManageUser from "../../Components/PrivateRoute/ManageUser";
import { useQuery } from "@tanstack/react-query";
import AdminROute from "../../Components/PrivateRoute/AdminRoute";

export interface User {
  _id: string;
  email: string;
  userName: string;
}
interface UserProps {
  user: User[];
}

const manageUsers = () => {
  const { loading } = useContext(AuthContext);
  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/user", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await response.json();
      return data;
    },
  });
  console.log(user);

  if (isLoading) {
    return <Loading />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <PrivateRoute>
      <AdminROute>
        <div className="flex  ">
          <div className="">
            <NestedNav />
          </div>
          <div className="relative mx-auto pt-10 lg:pt-0 h-screen">
            <ManageUser users={user} />
          </div>
        </div>
      </AdminROute>
    </PrivateRoute>
  );
};

export default manageUsers;
