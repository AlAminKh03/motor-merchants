import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiFillFolderAdd } from "react-icons/ai";
import { BsBorderWidth } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { useRouter } from "next/router";

type Props = {};

const NestedNav = (props: Props) => {
  const router = useRouter();
  const [openNestedNav, setOpenNestedNav] = useState<boolean>(true);
  return (
    <div className="">
      <div className="pt-[4rem] md:pt-0 lg:hidden">
        {" "}
        {openNestedNav ? (
          <HiMenuAlt1
            className="text-3xl cursor-pointer hover:text-black rounded"
            onClick={() => {
              setOpenNestedNav(!openNestedNav);
            }}
          />
        ) : (
          <RxCrossCircled
            className="relative left-[220px] text-3xl cursor-pointer hover:text-black rounded "
            onClick={() => {
              setOpenNestedNav(!openNestedNav);
            }}
          />
        )}
      </div>
      <div
        className={` lg:block lg:bg-gray-50 lg:fixed h-screen lg:w-[250px] ${
          openNestedNav
            ? "hidden transition-all ease-in duration-500"
            : "h-screen -mt-8 pt-2 w-[200px] bg-gray-200 sticky z-10 transition-all ease-in duration-500"
        }`}
      >
        <ul className="">
          <li
            className={`flex items-center justify-center text-gray-700 gap-2 p-2 hover:bg-indigo-200 hover:text-black transition-all ease-in rounded-md m-2 duration-150 ${
              router.pathname === "/dashboard"
                ? "bg-indigo-200 p-2 rounded-md  text-black "
                : ""
            }`}
          >
            <BsBorderWidth />
            <Link href={"/dashboard"} className={`text-lg font-semibold`}>
              My Orders
            </Link>
          </li>
          <li
            className={`flex items-center justify-center text-gray-700 gap-2 p-2 hover:bg-indigo-200 hover:text-black transition-all ease-in rounded-md m-2 duration-150 ${
              router.pathname === "/dashboard/addProducts"
                ? "bg-indigo-200 p-2 rounded-md  text-black "
                : ""
            }`}
          >
            <AiFillFolderAdd />
            <Link
              href={"/dashboard/addProducts"}
              className={`text-lg font-semibold`}
            >
              Add Products{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NestedNav;
