import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Loading/Loading";
import { User } from "../../pages/dashboard/manageUsers";

interface UserProps {
  users: User[];
  refetch: any;
}

const ManageUser = ({ users, refetch }: UserProps) => {
  const { loading } = useContext(AuthContext);

  const makeAdmin = (id: string) => {
    fetch(`http://localhost:8000/user/admin/${id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(users);
        refetch();
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto  mt-5">
        <table className="table w-full mx-auto my-5">
          <thead className="bg-gray-400">
            <tr>
              <th className="px-4 py-2">No</th>
              <th className="px-4 py-2"> Name</th>
              <th className="px-4 py-2">email</th>
              <th className="px-4 py-2">role</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user: User, i: number) => {
              return (
                <React.Fragment key={user._id}>
                  <tr className="border text-center">
                    <th className="border px-4 py-2">{i + 1}</th>
                    <td className="border px-4 py-2">{user.userName}</td>
                    <td className="border px-4 py-2">
                      {user.email}
                      {/* {user?.emailVerified ? (
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-bold rounded-xl">
                          {" "}
                          VERIFIED{" "}
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-xs font-bold rounded-xl">
                          {" "}
                          NOT VERIFIED{" "}
                        </span>
                      )} */}
                    </td>
                    <td className="border px-4 py-2">
                      {user.role !== "admin" ? (
                        <button
                          className="border border-green-500 rounded-full bg-green-500 p-1 text-white text-xs"
                          onClick={() => makeAdmin(user._id)}
                        >
                          make admin
                        </button>
                      ) : (
                        <p className="text-gray-500 text-xs">ADMIN</p>
                      )}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
