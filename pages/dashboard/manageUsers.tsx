import React, { useContext } from "react";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import { AuthContext } from "../../Components/Contexts/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import { GetStaticProps } from "next";
import ManageUser from "../../Components/PrivateRoute/ManageUser";

export interface User {
  _id: string;
  email: string;
  userName: string;
}
interface UserProps {
  user: User[];
}

const manageUsers = ({ user }: UserProps) => {
  const { loading } = useContext(AuthContext);
  console.log(user);
  if (loading) {
    return <Loading />;
  }
  return (
    <PrivateRoute>
      <div className="flex  ">
        <div className="">
          <NestedNav />
        </div>
        <div className="relative mx-auto pt-10 lg:pt-0 ">
          <ManageUser users={user} />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default manageUsers;

export const getStaticProps: GetStaticProps = async (): Promise<{
  props: UserProps;
}> => {
  const response = await fetch("http://localhost:8000/user");
  const user = await response.json();
  return {
    props: { user },
  };
};
