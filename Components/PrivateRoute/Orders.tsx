import React from "react";
import { OrderProps } from "../../pages/dashboard";
import Link from "next/link";

interface OrdersProps {
  order: OrderProps[];
}

const Orders = ({ order }: OrdersProps) => {
  return (
    <div>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2"> Name</th>
              <th className="px-4 py-2">Service Name</th>
              <th className="px-4 py-2">Date and Time</th>
              <th className="px-4 py-2">payment</th>
            </tr>
          </thead>
          <tbody>
            {order.map((singleOrder: OrderProps, i: number) => {
              return (
                <React.Fragment key={singleOrder._id}>
                  <tr className="border">
                    <th className="border px-4 py-2">{i + 1}</th>
                    <td className="border px-4 py-2">{singleOrder.name}</td>
                    <td className="border px-4 py-2">{singleOrder.quantity}</td>
                    <td className="border px-4 py-2">
                      {singleOrder.price}
                      <br />
                    </td>
                    <td className="border px-4 py-2">
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
