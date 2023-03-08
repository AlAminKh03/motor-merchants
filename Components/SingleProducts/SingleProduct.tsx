import React, { useContext } from "react";
import { ProductProps } from "../../pages";
import { BiCartAlt, BiPhone } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { AiFillAmazonCircle, AiOutlineMail } from "react-icons/ai";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";

interface SingleProductProps {
  product: ProductProps;
}
interface InputProps {
  email: string;
  address: string;
}
const SingleProduct = ({ product }: SingleProductProps) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<InputProps> = async (data) => {
    console.log(data);
  };
  return (
    <div className="card card-side border border-gray-100 shadow-lg rounded-md grid grid-cols-2 items-center justify-center p-4 gap-2 ">
      <div>
        <div className="flex items-center gap-4">
          {" "}
          <div className="">
            <Image
              src={product.ImgUrl}
              alt={product.name}
              width={400}
              height={400}
            />
          </div>
          <div className="">
            <h2 className="font-bold text-black">{product.name}</h2>
            <p className="text-gray-500 text-sm ">{`${product.description
              .split(" ")
              .slice(0, 12)
              .join(" ")}...`}</p>
            <div className=" gap-6 text-sm text-gray-500 py-2">
              <p className="pt-3">
                {" "}
                Available:{" "}
                <span className="bg-indigo-100 text-indigo-900 text-xs font-semibold rounded-xl p-1">
                  {product.available}
                </span>
              </p>
              <p className="pt-3">
                Min order:{" "}
                <span className="bg-indigo-100 text-indigo-900 text-xs font-semibold rounded-xl p-1">
                  {product.minOrder}
                </span>
              </p>
            </div>
            <p className="py-2">
              {" "}
              <span className="text-lg font-bold ">${product.price}</span>/ per
              unit
            </p>

            <div className="py-3 flex items-center justify-start gap-3 uppercase text-indigo-900 font-semibold bg-indigo-100 p-2 rounded-md hover:bg-indigo-200 mr-24 cursor-pointer">
              <BiCartAlt className="w-4 h-4" />
              <Link className="" href={`/${product._id}`}>
                Purchase
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center  gap-32">
            <div>
              <p className="text-black font-bold">Order Summary : </p>
              <p className="text-gray-500 font-bold">Subtotal </p>
              <p className="text-gray-500 font-bold">Shipping fee </p>
              <p className="text-gray-500 font-bold">total </p>
            </div>
            <div>
              <p className="text-black font-bold">Shipping: </p>
              <p className="flex items-center gap-2 ">
                {" "}
                <AiFillAmazonCircle className="w-6 h-6" />
                <span className="text-xs font-bold text-gray-500">
                  Amazon delivery <br />
                  Shipped within 7-10 days
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
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
          </div>

          <div className="pb-3">
            <label className="">
              Address <span className="text-red-500">*</span>{" "}
            </label>
            <br />
            <div
              className={`flex items-center border-2 border-gray-300 rounded-md ${
                errors.address
                  ? "focus-within:border-red-600"
                  : "focus-within:border-indigo-700"
              } py-1 pr-8 `}
            >
              <BiPhone
                className="h-5 w-5 text-gray-400 ml-2 mr-2"
                aria-hidden="true"
              />
              <input
                type="password"
                placeholder="insert minium 6 chracters"
                {...register("address", { required: true, minLength: 6 })}
                className={` outline-none w-full focus:border-transparent  `}
              />
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-600 text-center text-xs font-light">
                {" "}
                Please fillup the address
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
