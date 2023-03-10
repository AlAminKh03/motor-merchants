import Link from "next/link";
import React from "react";
import { HiMenuAlt1 } from "react-icons/hi";

type Props = {};

const NestedNav = (props: Props) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <HiMenuAlt1 />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          <li>
            <Link href={"/dashboard/orders"}>My Orders</Link>
          </li>
          <li>
            <Link href={"/dashboard/addProducts"}>Add Products</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NestedNav;
