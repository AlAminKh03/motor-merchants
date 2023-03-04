import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center pt-7 mx-auto ">
        <div className="pb-4">
          <p className="text-4xl font-bold text-center ">
            Welcome to{" "}
            <span className="text-transparent   bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-500  font-bold">
              Motor Merchants
            </span>
          </p>
          <p className="text-center">
            <span className="text-gray-500 text-center gap-2">
              Already have an account?
            </span>
            <Link
              href={"/login"}
              className="hover:underline text-indigo-600 font-light"
            >
              {" "}
              please login
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center px-4 py-10 z-[10] bg-white w-[80%] md:w-[40%] shadow-2xl rounded-xl">
          <button className=" flex items-center justify-center gap-2 py-1 px-14 rounded-full border hover:bg-indigo-50 transition-all duration-150 ease-in font-[500]">
            <FcGoogle />
            continue with google
          </button>
          <div className="divider text-gray-400">or continue with email</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative pb-4">
              <label className="">
                Name <span className="text-red-500">*</span>{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder="Username"
                {...register("name", { required: true })}
                className={`border-2 outline-none rounded-md px-10 py-1 w-full ${
                  errors.password
                    ? "focus:border-red-600"
                    : "focus:border-indigo-700"
                }`}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineUser
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              {errors.name?.type === "required" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Please fillup the user name
                </p>
              )}
              <br />
            </div>
            <div className="pb-4 relative">
              <label className="">
                Email <span className="text-red-500">*</span>{" "}
              </label>
              <br />
              <input
                type="text"
                placeholder="motormerchant.dev"
                {...register("email", { required: true })}
                className={`border-2 outline-none rounded-md px-10 py-1 w-full ${
                  errors.email
                    ? "focus:border-red-600"
                    : "focus:border-indigo-700"
                }`}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineMail
                  className="h-5 w-5 text-gray-400 mt-1"
                  aria-hidden="true"
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-red-600 text-center text-xs font-light ">
                  {" "}
                  Please fillup the email Input
                </p>
              )}
            </div>

            <div className="relative">
              <label className="">
                Password <span className="text-red-500">*</span>{" "}
              </label>
              <br />
              <input
                type="password"
                placeholder="minimum 6 characters"
                {...register("password", { required: true, minLength: 6 })}
                className={`border-2 outline-none rounded-md px-10 py-1 w-full ${
                  errors.password
                    ? "focus:border-red-600"
                    : "focus:border-indigo-700"
                }`}
              />
              <div className="absolute bottom-2 left-0 flex items-center pl-2">
                <AiOutlineLock
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Please fillup the Password Input
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Please insert atleast 6 chracters
                </p>
              )}
              <br />
            </div>

            <div className="relative">
              <button
                type="submit"
                className=" w-full text-center text-indigo-700 border border-indigo-700 bg-white p-1  mt-5  hover:bg-indigo-100 transition-all duration-150 ease-in rounded-md"
              >
                {" "}
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
