import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { Url } from "url";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Loading from "../Loading/Loading";

interface ProfileProps {
  email: string;
  userName: string;
  location: string;
  phoneNumber: string;
  fbLink: string;
  linkdinLink: string;
  githubLink: string;
}
interface InputProps {
  location: string;
  github: string;
  linkedin: string;
  facebook: string;
}

const MyProfile = () => {
  const { user, loading } = useContext(AuthContext);
  const [profile, setProfile] = useState<ProfileProps>();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<InputProps>();
  const onSubmit: SubmitHandler<InputProps> = (data) => {
    const updatedInfo = {
      location: data.location,
      fbLink: data.facebook,
      linkdinLink: data.linkedin,
      githubLink: data.github,
    };
    console.log(updatedInfo);
    fetch(`https://motor-merchants-server.vercel.app/user/${profile?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(
          "Your information updated successfully 😊, Refresh the page to see updated information "
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://motor-merchants-server.vercel.app/user/${user.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="mx-[80px] border-2 border-gray-800 border-b-gray-800 border-b-8 border-r-8 p-16 rounded-md mt-10 ">
        <div>
          <div className="flex flex-col items-center justify-center">
            {user?.photoURL ? (
              <Image
                src={user.photoURL}
                alt="User photo"
                width={80}
                height={80}
                className="rounded-full "
              />
            ) : (
              <div style={{ width: 60, height: 60 }}>
                <CgProfile className="w-10 h-10  " />
              </div>
            )}
            <p className="font-[VT323] text-3xl border border-gray-800 border-b-gray-800 border-b-4 border-r-4 rounded-md p-1 mt-4 bg-indigo-100 text-center">
              {profile?.userName}
            </p>
            <p className="text-sm">{profile?.email}</p>
            <p className="flex items-center gap-2 mt-6 text-left">
              <FaLocationArrow className="w-6 h-6 text-indigo-400 " />{" "}
              <span className="text-xl font-bold"> : {profile?.location}</span>
            </p>
            <div className="flex mt-16 gap-3 justify-end">
              {profile?.githubLink ? (
                <Link href={profile?.githubLink}>
                  {" "}
                  <AiFillGithub className="w-8 h-8 cursor-pointer text-black skew-x-1 " />
                </Link>
              ) : (
                <AiFillGithub className="w-8 h-8 text-gray-500 " />
              )}
              {profile?.linkdinLink ? (
                <Link href={profile?.linkdinLink}>
                  {" "}
                  <AiFillLinkedin className="w-8 h-8 cursor-pointer text-blue-500 skew-x-1 " />
                </Link>
              ) : (
                <AiFillLinkedin className="w-8 h-8 text-gray-500 " />
              )}
              {profile?.fbLink ? (
                <Link href={profile?.fbLink}>
                  {" "}
                  <BsFacebook className="w-8 h-8 cursor-pointer text-blue-500 skew-x-1 " />
                </Link>
              ) : (
                <BsFacebook className="w-8 h-8 text-gray-500 hover:skew-x-[6]" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-[70px] border-2 border-gray-800 border-b-gray-800 border-b-8 border-r-8 p-8 rounded-md mt-10">
        <p className="font-[VT323] text-lg border border-gray-800 border-b-gray-800 border-b-4 border-r-4 rounded-md p-1 mt-4 bg-indigo-100 text-center font-bold">
          Update/Modify your location and social
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-3 ">
            <label className="">
              Location <span className="text-red-500"></span>{" "}
            </label>
            <br />
            <div
              className={`  flex items-center border-2 border-gray-300 rounded-md ${
                errors.location
                  ? "focus-within:border-red-600"
                  : "focus-within:border-indigo-700"
              } py-1 pr-8 `}
            >
              <FaLocationArrow
                className="h-5 w-5 text-gray-400 ml-2 mr-2"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Insert your Location"
                {...register("location")}
                className={` outline-none w-full focus:border-transparent  `}
              />
            </div>
          </div>
          <div className="pb-3 ">
            <label className="">
              Github <span className="text-red-500"></span>{" "}
            </label>
            <br />
            <div
              className={`  flex items-center border-2 border-gray-300 rounded-md ${
                errors.github
                  ? "focus-within:border-red-600"
                  : "focus-within:border-indigo-700"
              } py-1 pr-8 `}
            >
              <AiFillGithub
                className="h-5 w-5 text-gray-400 ml-2 mr-2"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Insert your GitHub Url"
                {...register("github")}
                className={` outline-none w-full focus:border-transparent  `}
              />
            </div>
          </div>
          <div className="pb-3 ">
            <label className="">
              LinkedIn <span className="text-red-500"></span>{" "}
            </label>
            <br />
            <div
              className={`  flex items-center border-2 border-gray-300 rounded-md ${
                errors.linkedin
                  ? "focus-within:border-red-600"
                  : "focus-within:border-indigo-700"
              } py-1 pr-8 `}
            >
              <AiFillLinkedin
                className="h-5 w-5 text-gray-400 ml-2 mr-2"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Insert your LinkedIn Url"
                {...register("linkedin")}
                className={` outline-none w-full focus:border-transparent  `}
              />
            </div>
          </div>
          <div className="pb-3 ">
            <label className="">
              Facebook <span className="text-red-500"></span>{" "}
            </label>
            <br />
            <div
              className={`  flex items-center border-2 border-gray-300 rounded-md ${
                errors.facebook
                  ? "focus-within:border-red-600"
                  : "focus-within:border-indigo-700"
              } py-1 pr-8 `}
            >
              <BsFacebook
                className="h-5 w-5 text-gray-400 ml-2 mr-2"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Insert your Facebook Url"
                {...register("facebook")}
                className={` outline-none w-full focus:border-transparent  `}
              />
            </div>
          </div>

          <button
            type="submit"
            className=" w-full text-center text-indigo-700 border  border-gray-800 border-b-gray-800 border-b-4 border-r-4 rounded-md p-1 mt-4 bg-indigo-100 hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in duration-500"
          >
            {" "}
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
