import Link from "next/link";
import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Components/Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Loading from "../Components/Loading/Loading";
import useToken from "../Components/Hooks/useToken";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const signup = () => {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [token] = useToken(currentUser);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  // using context
  const {
    createUser,
    manageUser,
    user,
    signInWithGoogle,
    loading,
    setLoading,
  } = useContext(AuthContext);

  if (token) {
    router.push("/verifyEmail");
  }
  // form submitting function
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const userData = {
      userName: data.name,
      email: data.email,
    };
    try {
      const creatingUser = await createUser(data.email, data.password);
      const userInfo = await manageUser({ displayName: data.name });
      fetch("https://motor-merchants-server.vercel.app/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setLoading(false);
          setCurrentUser(result.email);
          toast.success(`Successfully Signed Up`, {
            duration: 5000,
          });
          router.push("/verifyEmail");
        })
        .catch((err) => console.log(err));

      // if(user.emailVerified){
      //   fetch(`https://motor-merchants-server.vercel.app/user/${}`);
      // }
    } catch (error) {
      setLoading(false);
      toast.error(`${error}`);
    }
  };
  const signInwithpopup = () => {
    signInWithGoogle();
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div
      className="relative bg-no-repeat bg-[top_left_10rem] md:bg-[top_left_27rem] bg-cover h-screen mx-0 md:mx-[200px] md:mt-20 mt-16"
      style={{
        backgroundImage: "url('/tire.jpg')",
      }}
    >
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
          <button
            className=" flex items-center justify-center gap-2 py-1 px-14 rounded-full border hover:bg-indigo-50 transition-all duration-150 ease-in font-[500]"
            onClick={signInwithpopup}
          >
            <FcGoogle />
            continue with google
          </button>
          <div className="divider text-gray-400">or continue with email</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" pb-3">
              <label className="">
                Name <span className="text-red-500">*</span>{" "}
              </label>
              <br />
              <div
                className={`flex items-center border-2 border-gray-300 rounded-md ${
                  errors.name
                    ? "focus-within:border-red-600"
                    : "focus-within:border-indigo-700"
                } py-1 pr-8  `}
              >
                <AiOutlineUser
                  className="h-5 w-5 text-gray-400 ml-2 mr-2"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Username"
                  {...register("name", { required: true })}
                  className={` outline-none w-full focus:border-transparent  `}
                />
              </div>
              {errors.name?.type === "required" && (
                <p className="text-red-600 text-center text-xs font-light">
                  {" "}
                  Please fillup the user name
                </p>
              )}
            </div>
            <div className="pb-3 ">
              <label className="">
                Email <span className="text-red-500">*</span>{" "}
              </label>
              <br />
              <div
                className={`flex items-center border-2 border-gray-300 rounded-md ${
                  errors.name
                    ? "focus-within:border-red-600"
                    : "focus-within:border-indigo-700"
                } py-1 pr-8 `}
              >
                <AiOutlineMail
                  className="h-5 w-5 text-gray-400 ml-2 mr-2"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Insert your Email"
                  {...register("email", { required: true })}
                  className={` outline-none w-full focus:border-transparent  `}
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="text-red-600 text-center text-xs font-light ">
                  {" "}
                  Please fillup the email Input
                </p>
              )}
            </div>

            <div className="pb-3">
              <label className="">
                Password <span className="text-red-500">*</span>{" "}
              </label>
              <br />
              <div
                className={`flex items-center border-2 border-gray-300 rounded-md ${
                  errors.name
                    ? "focus-within:border-red-600"
                    : "focus-within:border-indigo-700"
                } py-1 pr-8 `}
              >
                <AiOutlineLock
                  className="h-5 w-5 text-gray-400 ml-2 mr-2"
                  aria-hidden="true"
                />
                <input
                  type="password"
                  placeholder="insert minium 6 chracters"
                  {...register("password", { required: true, minLength: 6 })}
                  className={` outline-none w-full focus:border-transparent  `}
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
                className=" w-full text-center text-indigo-700 border border-indigo-700 bg-white p-1  mt-2  hover:bg-indigo-100 transition-all duration-150 ease-in rounded-md"
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
