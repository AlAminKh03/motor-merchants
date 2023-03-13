import React, { useContext, useState } from "react";
import { OrderProps } from "../../pages/dashboard";
import Link from "next/link";
import { useQuery } from "react-query";
import { AuthContext } from "../Contexts/AuthProvider";
import Loading from "../Loading/Loading";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { QueryObserverResult } from "@tanstack/query-core/build/lib/types";

interface OrdersProps {
  order: OrderProps[];
  refetch: any;
}

const Orders = ({ order, refetch }: OrdersProps) => {
  const { user, loading } = useContext(AuthContext);
  const openModal = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/order/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            refetch();
          });
      }
    });
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col justify-center items-center  mx-auto ">
      <div className="mt-4">
        <table className="table md:w-[800px] ">
          <thead>
            <tr>
              <th className="px-4 py-2 "></th>
              <th className="px-4 py-2 text-center"> Name</th>
              <th className="px-4 py-2 text-center">Quantity</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-center">action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((singleOrder: OrderProps, i: number) => {
              return (
                <React.Fragment key={singleOrder._id}>
                  <tr className="border">
                    <th className="border px-4 py-2 ">{i + 1}</th>
                    <td className="border px-4 py-2 text-center">
                      {singleOrder.name}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {singleOrder.quantity}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      ${singleOrder.price}
                      <br />
                    </td>
                    <td className="border px-4 py-2 text-center">
                      {singleOrder.price && (
                        <Link
                          href={`dashboard/payment/${singleOrder._id}`}
                          className="bg-green-600 p-1 px-2 text-white rounded-md "
                        >
                          pay
                        </Link>
                      )}
                      {/* {booking.price && booking.paid && (
                        <p className="text-green-600">PAID</p>
                      )} */}
                    </td>
                    <td className=" flex justify-center px-4 py-2">
                      <button onClick={() => openModal(singleOrder._id)}>
                        <MdDeleteForever className="text-red-500 w-5 h-5" />
                      </button>
                      <br />
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

export default Orders;
