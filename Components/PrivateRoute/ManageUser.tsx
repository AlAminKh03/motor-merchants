import { GetStaticProps } from "next";
import React from "react";
import { User } from "../../pages/dashboard/manageUsers";

interface UserProps {
  users: User[];
}

const ManageUser = ({ users }: UserProps) => {
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
            {users.map((user: User, i: number) => {
              return (
                <React.Fragment key={user._id}>
                  <tr className="border text-center">
                    <th className="border px-4 py-2">{i + 1}</th>
                    <td className="border px-4 py-2">{user.userName}</td>
                    <td className="border px-4 py-2">{user.email}</td>
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
