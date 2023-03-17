import { GetStaticProps } from "next";
import React, { useContext } from "react";
import { User } from "../../pages/dashboard/manageUsers";
import { AuthContext } from "../Contexts/AuthProvider";

interface UserProps {
  users: User[];
}

const ManageUser = ({ users }: UserProps) => {
  const { user } = useContext(AuthContext);
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
            {users.map((singleuser: User, i: number) => {
              return (
                <React.Fragment key={singleuser._id}>
                  <tr className="border text-center">
                    <th className="border px-4 py-2">{i + 1}</th>
                    <td className="border px-4 py-2">{singleuser.userName}</td>
                    <td className="border px-4 py-2">
                      {singleuser.email}
                      {user?.emailVerified ? (
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-bold rounded-xl">
                          {" "}
                          VERIFIED{" "}
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 text-xs font-bold rounded-xl">
                          {" "}
                          NOT VERIFIED{" "}
                        </span>
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {/* {user.role ? (
                        <p className="text-gray-500 text-xs">ADMIN</p>
                      ) : ( */}
                      <button className="border border-green-500 rounded-full bg-green-500 p-1 text-white text-xs">
                        make admin
                      </button>
                      {/* )} */}
                    </td>
                    {/* <td className="border px-4 py-2">
                      <button className="border border-red-500 rounded-full bg-red-500 p-1 text-white text-xs">
                        delete
                      </button>
                    </td> */}
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
