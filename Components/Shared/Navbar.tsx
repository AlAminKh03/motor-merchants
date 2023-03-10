import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import Loading from "../Loading/Loading";

interface MenuItems {
  path: string;
  content: string;
}

const Navbar: React.FC = (): JSX.Element => {
  const [openMenuNav, setOpenMenuNav] = useState<boolean>(false);
  const router = useRouter();
  const { user, signOutUser, loading, setLoading } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser();
    setLoading(false);
  };
  if (loading) {
    return <Loading />;
  }
  const menuItems: MenuItems[] = [
    {
      path: "/",
      content: "HOME",
    },
    {
      path: "/about",
      content: "ABOUT",
    },
    {
      path: "/blog",
      content: "BLOG",
    },
    {
      path: "/dashboard",
      content: "DASHBOARD",
    },
    {
      path: "/login",
      content: "LOGIN",
    },
    {
      path: "/",
      content: "LOGOUT",
    },
  ];
  const filteredMenuItems = user?.uid
    ? menuItems.filter((item) => item.content !== "LOGIN")
    : menuItems.filter((item) => item.content !== "LOGOUT");
  return (
    <div className="  w-full py-2 px-5 z-40 border border-l-0 border-b-gray-200 border-r-0">
      <div className=" hidden  md:grid grid-cols-2 ">
        <div className="flex items-center gap-2">
          <Image
            src="/favicon.ico"
            alt="logo pic"
            width="70"
            height="70"
            className="text-indigo-500"
          />
          <div>
            <p className="tracking-wide text-xl font-semibold text-indigo-700">
              Motor Merchants
            </p>{" "}
            <p className=" uppercase text-xs text-indigo-700">
              Heart of Automobiles
            </p>
          </div>
        </div>
        <div className="flex justify-around pt-5">
          {filteredMenuItems.map(
            (menuItem: { content: string; path: string }) => {
              return (
                <div key={menuItem.content}>
                  <Link
                    href={`${menuItem.path}`}
                    className={`text-sm text-gray-600 hover:text-black hover:transition-all ease-in duration-100 tracking-widest cursor-pointer font-bold ${
                      menuItem.content === "LOGIN"
                        ? "border bg-black rounded-md text-white p-2 hover:bg-gray-200 hover:text-black"
                        : null
                    } ${
                      menuItem.content === "LOGOUT"
                        ? "border bg-red-500 rounded-md text-white p-2 hover:bg-gray-200 hover:text-black"
                        : null
                    } ${
                      router.pathname === menuItem.path
                        ? "border-b  border-indigo-800 pb-2 text-indigo-700 "
                        : ""
                    }
                    `}
                    onClick={() => {
                      if (menuItem.content === "LOGOUT") {
                        handleSignOut();
                      }
                    }}
                  >
                    {menuItem.content}
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* for mobile  */}
      <div className="sm:block md:hidden fixed z-30 top-0 left-0 w-full ">
        <div className=" flex bg-white justify-around sticky min-w-full  px-5 gap-48 py-3 top-0 z-20">
          <div className="grow ">
            <div className="flex items-center gap-2">
              <Image
                src="/favicon.ico"
                alt="logo pic"
                width="40"
                height="40"
                className="text-indigo-500"
              />
              <div>
                <p className=" text-sx  text-indigo-700">Motor Merchants</p>{" "}
                <p className=" uppercase text-[0.3rem] text-indigo-700">
                  Heart of Automobiles
                </p>
              </div>
            </div>
          </div>
          <div className="">
            {openMenuNav ? (
              <AiOutlineClose
                className="text-3xl cursor-pointer hover:bg-gray-100   rounded"
                onClick={() => {
                  setOpenMenuNav(!openMenuNav);
                }}
              />
            ) : (
              <CgMenuRight
                className="text-3xl cursor-pointer hover:bg-gray-100   rounded"
                onClick={() => {
                  setOpenMenuNav(!openMenuNav);
                }}
              />
            )}
          </div>
        </div>
        <div
          className={`bg-transparent  w-screen h-[40vh] absolute ${
            openMenuNav ? " right-0" : " right-[100%]"
          } text-left pl-6 transition-all ease-in duration-300 z-10 `}
          style={{
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: openMenuNav ? 1 : 0,
          }}
        >
          {filteredMenuItems.map(
            (menuItem: { content: string; path: string }) => {
              return (
                <div key={menuItem.content} className="p-3">
                  <Link
                    href={`${menuItem.path}`}
                    className={`text-sm text-white hover:text-white hover:transition-all ease-in duration-100 tracking-widest cursor-pointer font-bold ${
                      menuItem.content === "LOGIN"
                        ? "border bg-black rounded-md text-white p-2 hover:bg-gray-200 hover:text-black"
                        : null
                    } ${
                      menuItem.content === "LOGOUT"
                        ? "border bg-red-500 rounded-md text-white p-2 hover:bg-gray-200 hover:text-black"
                        : null
                    } ${
                      router.pathname === menuItem.path
                        ? "border-b-2  border-indigo-800 pb-2 text-indigo-700 "
                        : ""
                    }
                    `}
                    onClick={() => {
                      if (menuItem.content === "LOGOUT") {
                        handleSignOut();
                      }
                    }}
                  >
                    {menuItem.content}
                  </Link>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
