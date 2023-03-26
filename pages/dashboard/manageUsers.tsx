import React, { useContext } from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import ManageUser from "../../Components/PrivateRoute/ManageUser";
import AdminROute from "../../Components/PrivateRoute/AdminRoute";
import { AuthContext } from "../../Components/Contexts/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import { useQuery } from "@tanstack/react-query";

export interface User {
  _id: string;
  email: string;
  userName: string;
  role: string;
}
interface UserProps {
  user: User[];
}

const ManageUsers = () => {
  const { loading } = useContext(AuthContext);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        "https://motor-merchants-server.vercel.app/users"
      );
      const data = response.json();
      return data;
    },
  });
  if (loading) {
    return <Loading />;
  }
  return (
    <PrivateRoute>
      <AdminROute>
        <div className="flex gap-2 lg:mt-20 mt-10 h-screen w-[90%]">
          <div className="">
            <NestedNav />
          </div>
          <div className="relative mx-auto lg:mr-[220px] pt-14 lg:pt-0 h-full w-full">
            <ManageUser users={users} refetch={refetch} />
          </div>
        </div>
      </AdminROute>
    </PrivateRoute>
  );
};

export default ManageUsers;
