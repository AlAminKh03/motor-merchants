import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

interface MenuItems {
  path: string;
  content: string;
}

const Navbar: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser();
  };
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
    <div className=" hidden md:block  w-full py-2 px-5 z-40 border border-l-0 border-b-gray-200 border-r-0">
      <div className="grid grid-cols-2 ">
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
    </div>
  );
};

export default Navbar;
