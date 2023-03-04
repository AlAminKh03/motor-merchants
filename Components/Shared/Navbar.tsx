import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface MenuItems {
  path: string;
  content: string;
}

const Navbar: React.FC = (): JSX.Element => {
  const router = useRouter();
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
  ];
  return (
    <div className=" hidden md:block  w-full py-2 px-5 z-40 border border-l-0 border-b-gray-200 border-r-0">
      <div className="grid grid-cols-2 ">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo pic" width="80" height="80" />
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
          {menuItems.map((menuItem: { content: string; path: string }) => {
            return (
              <div key={menuItem.content}>
                <Link
                  href={`${menuItem.path}`}
                  className={`text-sm text-gray-600 hover:text-black hover:transition-all ease-in duration-100 tracking-widest cursor-pointer font-bold ${
                    menuItem.content === "LOGIN"
                      ? "border bg-black rounded-md text-white p-2 hover:bg-gray-200 hover:text-black"
                      : null
                  } ${
                    router.pathname === menuItem.path
                      ? "border-b  border-indigo-800 pb-2 text-indigo-700 "
                      : ""
                  }`}
                >
                  {menuItem.content}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
