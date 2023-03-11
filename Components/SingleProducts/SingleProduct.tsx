import React, { useContext, useState, useEffect } from "react";
import { ProductProps } from "../../pages";
import { BiCartAlt, BiPhone } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillAmazonCircle,
  AiOutlineMail,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaAddressCard } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthContext } from "../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import Loading from "../Loading/Loading";

interface SingleProductProps {
  product: ProductProps;
}
interface InputProps {
  email: string;
  address: string;
  phoneNumber: string;
  quantity: number;
}
const SingleProduct = ({ product }: SingleProductProps) => {
  let subTotalNumber = product?.price * product?.minOrder;
  let totalNumber = subTotalNumber + 10;
  const [value, setValue] = useState<number>(product.minOrder);
  const [subTotal, setSubTotal] = useState<number>(subTotalNumber);
  const [total, setTotal] = useState<number>(totalNumber);
  const { user, loading } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>();
  useEffect(() => {
    setSubTotal(value * product.price);
    setTotal(subTotal + 10);
  }, [value, subTotal]);
  const handleIncrease = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const handleDecrease = () => {
    if (value > product.minOrder) {
      setValue((prevValue) => prevValue - 1);
    }
  };
  const onSubmit: SubmitHandler<InputProps> = async (data, event) => {
    event?.preventDefault();
    const orderData = {
      name: product.name,
      email: user?.email,
      address: data.address,
      phoneNumber: data.phoneNumber,
      quantity: value,
      price: total,
    };
    try {
      const response = await fetch("http://localhost:8000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderData),
      });
      const data = await response.json();
      console.log(data);
      toast.success("Order successfull ,for payment got to the dashboard");
    } catch (err) {
      console.log(err);
      toast.error(`${err}`);
    }
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="card card-side  grid grid-cols-1 md:grid-cols-2 items-center justify-center p-4 gap-2 ">
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
          </div>
        </div>
        <div>
          <div className="flex items-center  gap-32">
            <div>
              <p className="text-black font-bold">Order Summary : </p>
              <div className="flex items-center gap-14">
                <p className="text-gray-500 font-bold  ">Subtotal </p>
                <p className="text-right">$ {subTotal}</p>
              </div>
              <div className="flex items-center gap-10">
                <p className="text-gray-500 font-bold ">Shipping Fee </p>
                <p className="text-right">$ 10</p>
              </div>
              <div className="flex items-center gap-20">
                <p className="text-gray-500 font-bold ">Total </p>
                <p className="text-right">$ {total}</p>
              </div>
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
      <div className="mx-24 my-10">
        <p className="font-bold text-black text-center bg-indigo-100 p-2 rounded-md">
          {user?.displayName}{" "}
        </p>
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
              } py-1 pr-8`}
            >
              <AiOutlineMail
                className="h-5 w-5 text-gray-400 ml-2 mr-2"
                aria-hidden="true"
              />
              <input
                type="email"
                value={user?.email}
                {...register("email", { required: true })}
                className={` outline-none w-full focus:border-transparent text-xs text-gray-500 font-bold `}
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-red-600 text-center text-xs font-light">
                {" "}
                Please fillup the email
              </p>
            )}
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
              <FaAddressCard
                className="h-5 w-5 text-gray-400 ml-2 mr-2"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="insert your shipping address"
                {...register("address", { required: true, minLength: 6 })}
                className={` outline-none w-full focus:border-transparent  text-xs`}
              />
            </div>
            {errors.address?.type === "required" && (
              <p className="text-red-600 text-center text-xs font-light">
                {" "}
                Please fillup the address
              </p>
            )}
          </div>
          <div className="pb-3">
            <label className="">
              Phone Number <span className="text-red-500">*</span>{" "}
            </label>
            <br />
            <div
              className={`flex items-center border-2 border-gray-300 rounded-md ${
                errors.phoneNumber
                  ? "focus-within:border-red-600"
                  : "focus-within:border-indigo-700"
              } py-1 pr-8 `}
            >
              <BiPhone
                className="h-5 w-5 text-gray-400 ml-2 mr-2"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="insert your phone Number"
                {...register("phoneNumber", { required: true })}
                className={` outline-none w-full focus:border-transparent text-xs `}
              />
            </div>
            {errors.phoneNumber?.type === "required" && (
              <p className="text-red-600 text-center text-xs font-light">
                {" "}
                Please fillup your phone Number
              </p>
            )}
          </div>
          <div className="pb-3 mr-24">
            <label className="">
              Quantity <span className="text-red-500">*</span>{" "}
            </label>
            <br />
            <div
              className={`flex items-center border-2 border-gray-300 rounded-md ${
                errors.quantity
                  ? "focus-within:border-red-600"
                  : "focus-within:border-indigo-700"
              } py-1 px-8 `}
            >
              <button type="button" onClick={handleDecrease}>
                <AiOutlineMinus className="text-xl font-bold cursor-pointer" />
              </button>
              <input
                type="number"
                {...register("quantity")}
                value={value}
                min={product.minOrder}
                max={product.available}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className={` outline-none w-full focus:border-transparent text-center `}
              />
              <button type="button" onClick={handleIncrease}>
                <AiOutlinePlus className="text-xl font-bold cursor-pointer" />
              </button>
            </div>

            <br />
          </div>

          <div className="relative">
            <div className="py-3 flex items-center justify-center gap-3 uppercase text-indigo-900 font-semibold bg-indigo-100 p-2 rounded-md hover:bg-indigo-200 mr-24 cursor-pointer">
              <BiCartAlt className="w-4 h-4" />
              <button type="submit">place order</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleProduct;
