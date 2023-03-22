import Link from "next/link";
import React, { useContext, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiFillFolderAdd, AiFillSetting } from "react-icons/ai";
import { BsBorderWidth } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import { MdRateReview } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { IoSettingsSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../Hooks/useAdmin";

type Props = {};

const NestedNav = (props: Props) => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const router = useRouter();
  const [openNestedNav, setOpenNestedNav] = useState<boolean>(true);
  return (
    <div className="">
      <div className=" mt-[2rem] md:mt-[0rem] md:hidden">
        {" "}
        {openNestedNav ? (
          <HiMenuAlt1
            className=" mt-[4rem] text-3xl cursor-pointer hover:text-black rounded"
            onClick={() => {
              setOpenNestedNav(!openNestedNav);
            }}
          />
        ) : (
          <RxCrossCircled
            className="relative left-[190px] text-3xl  cursor-pointer text-white hover:text-gray-200 rounded z-40 top-8 "
            style={{
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              opacity: openNestedNav ? 0 : 1,
            }}
            onClick={() => {
              setOpenNestedNav(!openNestedNav);
            }}
          />
        )}
      </div>
      <div
        className={` md:block   h-screen  bg-gray-50 w-[190px]  md:w-[250px] md:pl-10 ${
          openNestedNav
            ? "hidden transition-all ease-in duration-500"
            : "h-screen -mt-12 lg:-mt-10 pt-6  sticky z-10 transition-all ease-in duration-500 "
        }`}
      >
        <ul className="  flex flex-col justify-center items-start pl-5 md:pl-0 mx-auto pt-4 ">
          <li
            className={`flex items-center justify-center text-gray-700 p-2 gap-2  hover:text-indigo-900 transition-all ease-in rounded-xl duration-150   ${
              router.pathname === "/dashboard"
                ? " text-indigo-900 bg-indigo-50 border-indigo-700 text-semibold"
                : ""
            }`}
          >
            <BsBorderWidth />
            <Link href={"/dashboard"}>My Orders</Link>
          </li>
          {isAdmin && (
            <li
              className={`flex items-center justify-center text-gray-700 p-2 gap-2  hover:text-indigo-900 transition-all ease-in rounded-xl duration-150  ${
                router.pathname === "/dashboard/addProducts"
                  ? " text-indigo-900 bg-indigo-50 border-indigo-700 text-semibold"
                  : ""
              }`}
            >
              <AiFillFolderAdd />
              <Link href={"/dashboard/addProducts"}>Add Products </Link>
            </li>
          )}
          <li
            className={`flex items-center justify-start text-gray-700 p-2 gap-2  hover:text-indigo-900 transition-all ease-in rounded-xl duration-150  ${
              router.pathname === "/dashboard/reviews"
                ? " text-indigo-900 bg-indigo-50 border-indigo-700 text-semibold"
                : ""
            }`}
          >
            <MdRateReview />
            <Link href={"/dashboard/reviews"}> Add Review </Link>
          </li>
          <li
            className={`flex items-center justify-start text-gray-700 p-2 gap-2  hover:text-indigo-900 transition-all ease-in rounded-xl duration-150  ${
              router.pathname === "/dashboard/history"
                ? " text-indigo-900 bg-indigo-50 border-indigo-700 text-semibold"
                : ""
            }`}
          >
            <BiHistory />
            <Link href={"/dashboard/history"}>History </Link>
          </li>
          <li
            className={`flex items-center justify-center text-gray-700 p-2 gap-2  hover:text-indigo-900 transition-all ease-in rounded-xl duration-150  ${
              router.pathname === "/dashboard/otherSettings"
                ? " text-indigo-900 bg-indigo-50 border-indigo-700 text-semibold"
                : ""
            }`}
          >
            <IoSettingsSharp />
            <Link href={"/dashboard/otherSettings"}>Other Settings </Link>
          </li>
          {isAdmin && (
            <li
              className={`flex items-center justify-center text-gray-700 p-2 gap-2  hover:text-indigo-900 transition-all ease-in rounded-xl duration-150  ${
                router.pathname === "/dashboard/manageUsers"
                  ? " text-indigo-900 bg-indigo-50 border-indigo-700 text-semibold"
                  : ""
              }`}
            >
              <FiUsers />
              <Link href={"/dashboard/manageUsers"}>Manage Users </Link>
            </li>
          )}
          <li
            className={`flex flex-col items-center justify-center ${
              isAdmin ? "mt-[12rem] " : "mt-[16rem]"
            }`}
          >
            <div
              className={`flex flex-col items-center  md:justify-center
                text-gray-700  gap-2   cursor-pointer  ${
                  router.pathname === "/dashboard/myProfile"
                    ? " text-indigo-900 bg-indigo-50 border-indigo-700 text-semibold"
                    : ""
                }`}
            >
              {user?.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt="User photo"
                  width={40}
                  height={40}
                  className="rounded-full "
                />
              ) : (
                <div style={{ width: 40, height: 40 }}>
                  <CgProfile className="w-10 h-10  " />
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center gap-4 ">
                <div className="flex flex-col justify-center items-center">
                  <p className="text-black text-sm">{user.displayName}</p>
                  <p className="text-gray-500 text-xs">{user.email}</p>
                </div>
              </div>
            </div>
            <Link href={"/dashboard/myProfile"}>
              <AiFillSetting className="w-5 h-6 " />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NestedNav;
