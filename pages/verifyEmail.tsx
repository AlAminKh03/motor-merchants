import React, { useContext } from "react";
import { AuthContext } from "../Components/Contexts/AuthProvider";
import Link from "next/link";

type Props = {};

const verifyEmail = (props: Props) => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="relative bg-no-repeat bg-[top_left_10rem] md:bg-[top_left_27rem] bg-cover h-screen mt-20"
      style={{
        backgroundImage: "url('/tire.jpg')",
      }}
    >
      <div className="flex flex-col justify-center items-center my-auto mt-20 gap-3">
        <p className="text-2xl">
          Hello,{" "}
          <span className="text-transparent   bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-500  font-bold">
            {user?.displayName} !!!
          </span>
        </p>

        <p className="text-2xl">
          Your Registration was Successful,Thank You for choosing us.
        </p>

        <p className="text-2xl text-center bg-indigo-200 p-3 rounded-md">
          For further browsing please Verify your email.
        </p>
        <Link
          href={"/"}
          className="hover:underline text-indigo-600 font-light pt-32 text-left"
        >
          {" "}
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default verifyEmail;
