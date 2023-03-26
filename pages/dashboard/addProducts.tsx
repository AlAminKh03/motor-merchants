import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../../Components/Contexts/AuthProvider";
import { useRouter } from "next/router";
import { IoPricetagOutline } from "react-icons/io5";
import { FiMinimize } from "react-icons/fi";
import { AiOutlineFileImage } from "react-icons/ai";
import {
  MdDriveFileRenameOutline,
  MdOutlineDescription,
  MdEventAvailable,
} from "react-icons/md";
import { toast } from "react-hot-toast";
import PrivateRoute from "../../Components/PrivateRoute/PrivateRoute";
import NestedNav from "../../Components/PrivateRoute/NestedNav";
import Loading from "../../Components/Loading/Loading";
import AdminROute from "../../Components/PrivateRoute/AdminRoute";

interface Inputs {
  name: string;
  description: string;
  price: number;
  minOrder: number;
  ImgUrl: string;
  available: number;
}

const AddProducts = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { loading } = useContext(AuthContext);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const productData = {
      name: data.name,
      description: data.description,
      price: data.price,
      minOrder: data.minOrder,
      ImgUrl: data.ImgUrl,
      available: data.available,
    };
    console.log(productData);
    fetch("https://motor-merchants-server.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("data saved to database successfully");
      });
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <PrivateRoute>
      <AdminROute>
        <div className="flex gap-2 lg:mt-20 mt-10 min-h-screen w-[90%] ">
          <div className="">
            <NestedNav />
          </div>
          <div className="relative lg:mr-[220px] pt-14 lg:pt-0 min-h-screen w-full ">
            <div className="flex flex-col justify-center items-center pt-7  ">
              <div className="">
                <p className="text-4xl font-bold text-center ">
                  Hello{" "}
                  <span className="text-transparent   bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-500  font-bold">
                    Merchants{" "}
                  </span>
                  <span className="badge badge-xs text-xs uppercase">
                    Admin/Mod
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-center justify-center pl-5 py-5 lg:py-0  w-[75%] md:w-[50%]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* PRODUCT NAME  */}
                  <div className=" pb-3 w-full">
                    <label className="">
                      Product Name <span className="text-red-500">*</span>{" "}
                    </label>
                    <br />
                    <div
                      className={`flex items-center border-2 border-gray-300 rounded-md w-[350px] ${
                        errors.name
                          ? "focus-within:border-red-600"
                          : "focus-within:border-indigo-700"
                      } py-1 pr-8  `}
                    >
                      <MdDriveFileRenameOutline
                        className="h-5 w-5 text-gray-400 ml-2 mr-2"
                        aria-hidden="true"
                      />
                      <input
                        type="text"
                        placeholder="name"
                        {...register("name", { required: true })}
                        className={` outline-none focus:border-transparent  `}
                      />
                    </div>
                    {errors.name?.type === "required" && (
                      <p className="text-red-600 text-center text-xs font-light">
                        {" "}
                        Please fillup the Product Name
                      </p>
                    )}
                  </div>
                  {/* PRICE  */}
                  <div className="pb-3">
                    <label className="">
                      Price <span className="text-red-500">*</span>{" "}
                    </label>
                    <br />
                    <div
                      className={`flex items-center border-2 border-gray-300 rounded-md ${
                        errors.name
                          ? "focus-within:border-red-600"
                          : "focus-within:border-indigo-700"
                      } py-1 pr-8 `}
                    >
                      <IoPricetagOutline
                        className="h-5 w-5 text-gray-400 ml-2 mr-2"
                        aria-hidden="true"
                      />
                      <input
                        type="number"
                        placeholder="insert price"
                        {...register("price", { required: true })}
                        className={` outline-none w-full focus:border-transparent  `}
                      />
                    </div>
                    {errors.price?.type === "required" && (
                      <p className="text-red-600 text-center text-xs font-light">
                        {" "}
                        Please fillup the Password Input
                      </p>
                    )}
                  </div>
                  {/* MINORDER  */}
                  <div className="pb-3">
                    <label className="">
                      Minimum Order <span className="text-red-500">*</span>{" "}
                    </label>
                    <br />
                    <div
                      className={`flex items-center border-2 border-gray-300 rounded-md ${
                        errors.name
                          ? "focus-within:border-red-600"
                          : "focus-within:border-indigo-700"
                      } py-1 pr-8 `}
                    >
                      <FiMinimize
                        className="h-5 w-5 text-gray-400 ml-2 mr-2"
                        aria-hidden="true"
                      />
                      <input
                        type="number"
                        placeholder="insert minium 6 chracters"
                        {...register("minOrder", { required: true })}
                        className={` outline-none w-full focus:border-transparent  `}
                      />
                    </div>
                    {errors.minOrder?.type === "required" && (
                      <p className="text-red-600 text-center text-xs font-light">
                        {" "}
                        Please fillup the Password Input
                      </p>
                    )}
                  </div>
                  {/* AVAILABLE ORDER  */}
                  <div className="pb-3">
                    <label className="">
                      Available <span className="text-red-500">*</span>{" "}
                    </label>
                    <br />
                    <div
                      className={`flex items-center border-2 border-gray-300 rounded-md ${
                        errors.name
                          ? "focus-within:border-red-600"
                          : "focus-within:border-indigo-700"
                      } py-1 pr-8 `}
                    >
                      <MdEventAvailable
                        className="h-5 w-5 text-gray-400 ml-2 mr-2"
                        aria-hidden="true"
                      />
                      <input
                        type="number"
                        placeholder="insert minium 6 chracters"
                        {...register("available", { required: true })}
                        className={` outline-none w-full focus:border-transparent  `}
                      />
                    </div>
                    {errors.available?.type === "required" && (
                      <p className="text-red-600 text-center text-xs font-light">
                        {" "}
                        Please fillup the Password Input
                      </p>
                    )}
                  </div>
                  {/* IMAGE URL  */}
                  <div className="pb-3">
                    <label className="">
                      Image Url <span className="text-red-500">*</span>{" "}
                    </label>
                    <br />
                    <div
                      className={`flex items-center border-2 border-gray-300 rounded-md ${
                        errors.name
                          ? "focus-within:border-red-600"
                          : "focus-within:border-indigo-700"
                      } py-1 pr-8 `}
                    >
                      <AiOutlineFileImage
                        className="h-5 w-5 text-gray-400 ml-2 mr-2"
                        aria-hidden="true"
                      />
                      <input
                        type="text"
                        placeholder="insert minium 6 chracters"
                        {...register("ImgUrl", {
                          required: true,
                          minLength: 6,
                        })}
                        className={` outline-none w-full focus:border-transparent  `}
                      />
                    </div>
                    {errors.ImgUrl?.type === "required" && (
                      <p className="text-red-600 text-center text-xs font-light">
                        {" "}
                        Please fillup the Password Input
                      </p>
                    )}
                  </div>
                  {/* DESCRIPTION  */}
                  <div className="pb-3 ">
                    <label className="">
                      Description <span className="text-red-500">*</span>{" "}
                    </label>
                    <br />
                    <div
                      className={`flex items-center border-2 border-gray-300 rounded-md ${
                        errors.name
                          ? "focus-within:border-red-600"
                          : "focus-within:border-indigo-700"
                      } py-1 pr-8 `}
                    >
                      <MdOutlineDescription
                        className="h-5 w-5 text-gray-400 ml-2 mr-2"
                        aria-hidden="true"
                      />
                      <textarea
                        placeholder="Write some description"
                        {...register("description", { required: true })}
                        className={` outline-none w-full focus:border-transparent resize-none `}
                      />
                    </div>
                    {errors.description?.type === "required" && (
                      <p className="text-red-600 text-center text-xs font-light ">
                        {" "}
                        Please fillup the email Input
                      </p>
                    )}
                  </div>

                  <div className="relative mb-10">
                    <button
                      type="submit"
                      className=" w-full text-center text-indigo-700 border border-indigo-700 bg-white p-1  mt-2  hover:bg-indigo-100 transition-all duration-150 ease-in rounded-md"
                    >
                      {" "}
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </AdminROute>
    </PrivateRoute>
  );
};

export default AddProducts;
