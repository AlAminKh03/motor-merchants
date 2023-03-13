import Link from "next/link";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { AuthContext } from "../Components/Contexts/AuthProvider";
import Loading from "../Components/Loading/Loading";
import { useRouter } from "next/router";

interface Inputs {
  email: string;
  password: string;
}

const login: React.FC = (): JSX.Element => {
  const { signInUser, user, signInWithGoogle, loading, setLoading } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const from = router.query.from || "/";
  if (user?.uid) {
    router.push({
      pathname: `${from}`,
    });
  }
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const signingUser = await signInUser(data.email, data.password);
      console.log("from sign in user ", signingUser);
      toast.success("Successfully Logged In  :smile: ");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log("error", err);
      toast.error(`${err}`);
    }
  };
  const signInWithPopUp = () => {
    signInWithGoogle();
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div
      className="relative bg-no-repeat bg-[top_left_10rem] md:bg-[top_left_27rem] bg-cover h-screen mx-0 md:mx-[200px] md:mt-0 mt-16"
      style={{
        backgroundImage: "url('/tire.jpg')",
      }}
    >
      <div className="flex flex-col justify-center items-center pt-7 mx-auto ">
        <div className="pb-4">
          <p className="text-4xl font-bold text-center ">Welcome Back!</p>
          <p className="text-center">
            <span className="text-gray-500 text-center gap-2">
              Don't have any account yet?
            </span>
            <Link
              href={"/signup"}
              className="hover:underline text-indigo-600 font-light"
            >
              {" "}
              Create an account here
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center px-4 py-10 z-[10] bg-white w-[80%] md:w-[40%] shadow-2xl rounded-xl">
          <button
            className=" flex items-center justify-center gap-2 py-1 px-14 rounded-full border hover:bg-indigo-50 transition-all duration-150 ease-in font-[500]"
            onClick={signInWithPopUp}
          >
            <FcGoogle />
            continue with google
          </button>
          <div className="divider text-gray-400">or continue with email</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-3 ">
              <label className="">
                Email <span className="text-red-500">*</span>{" "}
              </label>
              <br />
              <div
                className={`flex items-center border-2 border-gray-300 rounded-md ${
                  errors.email
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
                  errors.password
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
            </div>
            <label className=" text-center text-xs font-light">
              Forget Password?{" "}
              <Link
                href={"/resetPassword"}
                className="cursor-pointer text-indigo-700"
              >
                Reset Password
              </Link>
            </label>
            <div className="relative">
              <button
                type="submit"
                className=" w-full text-center text-indigo-700 border border-indigo-700 bg-white p-1  mt-5  hover:bg-indigo-100 transition-all duration-150 ease-in rounded-md"
              >
                {" "}
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
